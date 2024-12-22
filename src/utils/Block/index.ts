/* eslint-disable @typescript-eslint/no-unused-vars */
import Handlebars from "handlebars";
import { v4 as getID } from "uuid";
import EventBus from "@/utils/EventBus";
import { isEqual } from "@/utils/helpers";
import FormValidator from '@/utils/FormValidator';

export type TPropsLists = Block<IData>[];
export type TProps = Record<string, unknown>;
export type TChildren = Record<string, Block<IData>>;
export type TLists = Record<string, Block<IData>[]>;
export type TEvent = Record<string, EventListener>;
export type TAttr = Record<string, string | string[]>;

export interface IData {
  [key: string]: unknown,
  lists?: TPropsLists,
  events?: TEvent,
  attr?: TAttr,
}
export default abstract class Block<Props extends IData = IData> {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CBM: "flow:component-before-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render"
  };

  props;
  lists;
  children;
  attributes = {};
  formValidators: Record<string, typeof FormValidator> = {};

  _element: HTMLElement | null = null;
  _id: string = getID();
  _isSetUpgate: boolean;
  eventBus: () => EventBus;

  constructor(propsWithChildren: Props) {
    const eventBus = new EventBus();
    const { props, children, lists } = this._getChildrenPropsAndProps(propsWithChildren);
    this.props = this._makePropsProxy(this, props);
    this.children = children;
    this.lists = lists;
    this.eventBus = () => eventBus;
    this._registerEvents(eventBus);
    this._isSetUpgate = false;
    eventBus.emit(Block.EVENTS.INIT);
  }

  _addEvents(): void {
    this.addEvents();
    if (this.props?.events) {
      const { events } = this.props;

      Object.keys(events).forEach((eventName: string): void => {
        this._element?.addEventListener(eventName, (events as TEvent)[eventName]);
      });
    }
  }

  addEvents(): void {
    //
  }

  enableValidation = (element: HTMLElement) => {
    if (element) {
      const form = element.querySelector('.form');

      const validator = new FormValidator({ formElement: form });
      const formName = (form as HTMLFormElement).getAttribute('name');

      if (formName) {
        this.formValidators[formName] = validator;
        validator.enableValidation();
      }
    }
  };

  disableValidation = () => {
    Object.keys(this.formValidators).forEach((validatorName: string): void => {
      this.formValidators[validatorName]?.disableValidation();
    });
  };

  removeEvents(): void {
    //
  }

  _removeEvents(): void {
    this.removeEvents();
    if (this.props?.events) {
      const { events } = this.props;

      Object.keys(events).forEach((eventName: string): void => {
        this._element?.removeEventListener(eventName, (events as TEvent)[eventName]);
      });
    }
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CBM, this._componentBeforeMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  init() {
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  public _componentDidMount(): void {
    this.componentDidMount();

    Object.values(this.children).forEach((child): void => {
      if (child instanceof Block) {
        child.dispatchComponentDidMount();
      }
    });
  }

  public componentDidMount(): void {
    return;
  }

  public _componentBeforeMount(newElement: HTMLElement): void {
    this.componentBeforeMount(newElement);
  }

  public componentBeforeMount(newElement: HTMLElement): void {
    return;
  }

  public dispatchComponentDidMount(): void {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  public _componentDidUpdate(oldProps: TProps, newProps: TProps): void {
    const isReRender = this.componentDidUpdate(oldProps, newProps);

    if (isReRender) {
      this._render();
    } else {
      return;
    }
  }

  public componentDidUpdate(oldProps: TProps, newProps: TProps): boolean {
    return isEqual(oldProps, newProps);
  }

  public _getChildrenPropsAndProps(propsAndChildren: Props) {
    const children: TChildren = {};
    const props: TProps = {};
    const lists: TLists = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else if (Array.isArray(value)) {
        lists[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props, lists };
  }

  public addAttributes(): void {
    //
  }

  public _addAttributes(): void {
    const { attr = {} } = this.props;

    Object.entries(attr as TAttr).forEach(([key, value]): void => {
      if (key === 'class') {
        if (Array.isArray(value)) {
          this._element?.classList.add(...value);
        } else if (typeof value === 'string') {
          this._element?.classList.add(value);
        }
      } else if (typeof value === 'string') {
        this._element?.setAttribute(key, value);
      }
    });

    this.addAttributes();
  }

  public updateLists() {
    //
  }

  public setProps = (newProps: TProps) => {
    if (!newProps) {
      return;
    }

    this._isSetUpgate = false;
    const oldValue = { ...this.props };

    if (Object.values(newProps).length) {
      Object.assign(this.props, newProps);
    }

    // if (Object.values(this.children).length) {
    //   //
    // }

    if (this._isSetUpgate) {
      this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldValue, this.props);
      this._isSetUpgate = false;
    }
  }

  get element() {
    return this._element;
  }

  public _render() {
    this._removeEvents();
    this.updateLists();

    const propsAndStubs = { ...this.props };
    const _tmpId = getID();

    Object.entries(this.children).forEach(([key, child]) => {
      if (child instanceof Block) {
        propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
      }
    });

    Object.entries(this.lists).forEach(([key, child]) => {
      propsAndStubs[key] = `<div data-id="__l_${_tmpId}"></div>`;
    });

    const fragment = this._createDocumentElement('template') as HTMLTemplateElement;
    fragment.innerHTML = Handlebars.compile(this.render())(propsAndStubs);

    Object.values(this.children).forEach((child) => {
      if (child instanceof Block) {
        const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);
        const childContent = child.getContent() as HTMLElement;

        stub?.replaceWith(childContent);
      }
    });

    Object.entries(this.lists).forEach(([key, child]): void => {
      const listCont = this._createDocumentElement('template') as HTMLTemplateElement;

      (child as Block[]).forEach((item) => {
        if (item instanceof Block) {
          const itemContent = item.getContent() as HTMLElement;
          listCont.content.append(itemContent);
        } else {
          listCont.content.append(`${item}`);
        }
      });

      const stub = fragment.content.querySelector(`[data-id="__l_${_tmpId}"]`);
      stub?.replaceWith(listCont.content);
    });

    const newElement = fragment.content.firstElementChild;

    if (this._element) {
      this.eventBus().emit(Block.EVENTS.FLOW_CBM, newElement);
      (this._element as HTMLElement).replaceWith(newElement as HTMLElement);
    }

    this._element = newElement as HTMLElement;
    this._addEvents();
    this._addAttributes();
  }

  render(): string {
    return '';
  }

  public getContent() {
    return this.element;
  }

  public _makePropsProxy(self: Block, props: TProps | TChildren) {
    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop as string];
        return typeof value === "function" ? (value as EventListener).bind(target) : value;
      },

      set(target, prop, value) {
        if (target[prop as string] !== value) {
          target[prop as string] = value;
          self._isSetUpgate = true;
        }

        return true;
      },

      deleteProperty() {
        throw new Error('No access');
      }
    });
  }

  public _createDocumentElement(tagName: string): Element | HTMLElement | HTMLMetaElement {
    return document.createElement(tagName);
  }
}
