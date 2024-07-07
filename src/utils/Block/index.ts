import Handlebars from "handlebars";
import { v4 as getID } from 'uuid';
import EventBus from "@/utils/EventBus";

type TValue = string | number | boolean;
type TProps = Record<string, TValue>;

type TData = {
  props?: TProps;
  list?: Block[];
  children?: Record<string, Block>;
  events?: Record<string, EventListener>;
  attributes?: TProps;
};

export default class Block {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render"
  };

  private props: TData = {};
  private list: TData = {};
  private children: TData = {};
  private events: TData = {};
  private attributes: TData = {};

  _element = null;
  _meta = null;

  constructor({ props, list, children, events, attributes }: TData) {
    const eventBus = new EventBus();
    // this._meta = {
    //   tagName,
    //   props
    // };

    this.props = this._makePropsProxy(props);
    this.list = list;
    this.events = events;
    this.children = children;
    this.attributes = attributes;

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _registerEvents(eventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createDocumentElement() {
    const { tagName } = this._meta;
    this._element = document.createElement(tagName);
  }

  init() {
    this._createDocumentElement();

    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  _componentDidMount() {
    this.componentDidMount();
  }

  componentDidMount(oldProps) { }

  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidUpdate(oldProps, newProps) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this._render();
  }

  componentDidUpdate(oldProps, newProps) {
    return true;
  }

  setProps = nextProps => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  // private createElementPlug(propsAndStubs: Record<string, unknown>, tmpId: string) {
  //   const childrenEntries = Object.entries(this.children) as [key: string, child: HTMLElement][];
  //   childrenEntries.forEach(([key, child]) => {
  //     propsAndStubs[key] = `<div data-id="${child.id}"></div>`;
  //   });

  //   Object.entries(this.lists).forEach(([key]) => {
  //     propsAndStubs[key] = `<div data-id="${tmpId}"></div>`;
  //   });
  // }

  _render() {
    const block = this.render();
    this._element.innerHTML = block;
  }

  render() { }

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
        target[prop] = value;

        self.eventBus().emit(Block.EVENTS.FLOW_CDU, { ...target }, target);
        return true;
      },
      deleteProperty() {
        throw new Error("Нет доступа");
      }
    });
  }

  show() {
    this.getContent().style.display = "block";
  }

  hide() {
    this.getContent().style.display = "none";
  }
}
