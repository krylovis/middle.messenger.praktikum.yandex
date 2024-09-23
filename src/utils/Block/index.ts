/* eslint-disable @typescript-eslint/no-unused-vars */
import Handlebars from "handlebars";
import { v4 as getID } from "uuid";
import EventBus from "@/utils/EventBus";

type TProps = Record<string, string | number | boolean>;

type TAttr = Record<string, string | string[]>;
type TEvent = Record<string, EventListener>;
type TChildren = Block;
type TLists = Block[];

type TData = Record<string, TEvent | TChildren | TLists | TAttr | string | boolean>;

export default class Block {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render"
  };

  props;
  lists = {};
  children = {};
  attributes = {};

  _element: HTMLElement | null = null;
  _id = getID();
  eventBus: () => EventBus;

  constructor(propsWithChildren: TData = {}) {
    const eventBus = new EventBus();
    const { props, children, lists } = this._getChildrenPropsAndProps(propsWithChildren);
    this.props = this._makePropsProxy({ ...props });
    this.children = children;
    this.lists = lists;
    this.eventBus = () => eventBus;
    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _addEvents(): void {
    if(this.props?.events) {
      const { events } = this.props;

      Object.keys(events).forEach((eventName) => {
        console.log('eventName', eventName);
        this._element?.addEventListener(eventName, events[eventName]);
      });
    }
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  init() {
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  _componentDidMount() {
    this.componentDidMount();
    Object.values(this.children).forEach((child) => {
      child.dispatchComponentDidMount();
    });
  }

  componentDidMount(): void {
    return;
  }

  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidUpdate(oldProps?: TProps, newProps?: TProps) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this._render();
  }

  componentDidUpdate(oldProps?: TProps, newProps?: TProps): boolean {
    return true;
  }

  _getChildrenPropsAndProps(propsAndChildren: TData) {
    const children: Record<string, TChildren> = {};
    const props: TData = {};
    const lists: Record<string, TChildren[]> = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else if(Array.isArray(value)) {
        lists[key] = value;
      } else {
        props[key] = value;
      }
    });

    return {children, props, lists};
  }

  addAttributes(): void {
    // const { attr = {} } = this.props;
    const { attr = {} as TAttr } = this.props;

    Object.entries(attr).forEach(([key, value]): void => {
      if(key === 'class') {
        if (Array.isArray(value)) {
          this._element?.classList.add(...value);
        } else if(typeof value === 'string') {
          this._element?.classList.add(value);
        }
      } else if(typeof value === 'string') {
        this._element?.setAttribute(key, value);
      }
    });
  }

  setProps = (nextProps: TProps) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  }

  get element() {
    return this._element;
  }

  _render() {
    console.log("Render")
    const propsAndStubs = { ...this.props };
    const _tmpId = getID();

    Object.entries(this.children).forEach(([key, child]) => {
      propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
    });

    Object.entries(this.lists).forEach(([key, child]) => {
        propsAndStubs[key] = `<div data-id="__l_${_tmpId}"></div>`;
    });

    const fragment: HTMLElement = this._createDocumentElement('template');
    fragment.innerHTML = Handlebars.compile(this.render())(propsAndStubs);

    Object.values(this.children).forEach((child) => {
      const stub = fragment.content.querySelector(`[data-id="${child._id}"]`)
      stub.replaceWith(child.getContent());
    });

    Object.entries(this.lists).forEach(([key, child]) => {
      const listCont = this._createDocumentElement('template');
      child.forEach((item) => {
        if (item instanceof Block) {
            listCont.content.append(item.getContent());
        } else {
            listCont.content.append(`${item}`);
        }
      });
      const stub = fragment.content.querySelector(`[data-id="__l_${_tmpId}"]`);
      stub.replaceWith(listCont.content);
    });

    const newElement = fragment.content.firstElementChild;
    if (this._element) {
      this._element.replaceWith(newElement);
    }
    this._element = newElement;
    this._addEvents();
    this.addAttributes();
  }

  render() {
    //
  }

  getContent() {
    return this.element;
  }

  _makePropsProxy(props) {
    const self = this;

    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target, prop, value) {
        const oldTarget = {...target};
        target[prop] = value;
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },
      deleteProperty() {
        throw new Error('No access');
      }
    });
  }

  _createDocumentElement(tagName: string) {
    return document.createElement(tagName);
  }

  show() {
    const element = this.getContent();

    if(element) {
      element.style.display = "block";
    }
  }

  hide() {
    const element = this.getContent();

    if(element) {
      element.style.display = "none";
    }
  }
}
