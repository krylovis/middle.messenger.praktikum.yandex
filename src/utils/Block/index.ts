//@ts-nocheck

import Handlebars from "handlebars";
import { v4 as getID } from 'uuid';
import EventBus from "@/utils/EventBus";

export default class Block {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render"
  };

  _element = null;
  _id = getID();

  constructor(propsWithChildren = {}) {
    const eventBus = new EventBus();
    const {props, children, lists} = this._getChildrenPropsAndProps(propsWithChildren);
    this.props = this._makePropsProxy({...props});
    this.children = children;
    this.lists = lists;
    this.eventBus = () => eventBus;
    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _addEvents() {
    const {events = {}} = this.props;
    Object.keys(events).forEach(eventName => {this._element.addEventListener(eventName, events[eventName])} );
  }

  _registerEvents(eventBus) {
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
    Object.values(this.children).forEach(child => {child.dispatchComponentDidMount();});
  }

  componentDidMount(oldProps) {}

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

  _getChildrenPropsAndProps(propsAndChildren) {
    const children = {};
    const props = {};
    const lists = {};

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

  addAttributes() {
    const {attr = {}} = this.props;

    Object.entries(attr).forEach(([key, value]) => {
      if(key === 'class') {
        if (Array.isArray(value)) {
          this._element.classList.add(...value);
        } else {
          this._element.classList.add(value);
        }
      } else {
        this._element.setAttribute(key, value);
      }
    });
  }

  setProps = nextProps => {
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
    const _tmpId =  getID();

    Object.entries(this.children).forEach(([key, child]) => {
      propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
    });

    Object.entries(this.lists).forEach(([key, child]) => {
        propsAndStubs[key] = `<div data-id="__l_${_tmpId}"></div>`;
    });

    const fragment = this._createDocumentElement('template');
    fragment.innerHTML = Handlebars.compile(this.render())(propsAndStubs);

    Object.values(this.children).forEach(child => {
      const stub = fragment.content.querySelector(`[data-id="${child._id}"]`)
      stub.replaceWith(child.getContent());
    });

    Object.entries(this.lists).forEach(([key, child]) => {
      const listCont = this._createDocumentElement('template');
      child.forEach(item => {
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

  render() {}

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

  _createDocumentElement(tagName) {
    return document.createElement(tagName);
  }

  show() {
    this.getContent().style.display = "block";
  }

  hide() {
    this.getContent().style.display = "none";
  }
}

// type TValue = string | number | boolean;
// type TProps = Record<string, TValue>;

// interface IData {
//   props?: TProps;
//   list?: Block[];
//   children?: Record<string, Block>;
//   events?: Record<string, EventListener>;
//   attributes?: TProps;
// };

// export default class Block {
//   private static readonly EVENTS = {
//     INIT: "init",
//     FLOW_CDM: "flow:component-did-mount",
//     FLOW_CDU: "flow:component-did-update",
//     FLOW_RENDER: "flow:render"
//   };

//   private readonly props;
//   readonly list;
//   readonly children;
//   readonly events;
//   readonly attributes;

//   readonly eventBus: () => EventBus;

//   private _element: HTMLElement | null = null;
//   _id = getID();

//   constructor({ props, list, children, events, attributes }: IData) {
//     this.props = this._makePropsProxy({ ...props });
//     this.list = list;
//     this.events = events;
//     this.children = children;
//     this.attributes = attributes;

//     const eventBus = new EventBus();
//     this.eventBus = () => eventBus;
//     this._registerEvents(eventBus);
//     eventBus.emit(Block.EVENTS.INIT);
//   }

//   _addEvents() {
//     Object.keys(this.events).forEach(eventName => {
//       this._element?.addEventListener(eventName, this.events[eventName])
//     });
//   }

//   _registerEvents(eventBus: EventBus): void {
//     eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
//     eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
//     eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
//     eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
//   }

//   init() {
//     this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
//   }

//   _componentDidMount() {
//     this.componentDidMount();

//     Object.values(this.children).forEach(child => {
//       child.dispatchComponentDidMount();
//     });
//   }

//   componentDidMount(oldProps) { }

//   dispatchComponentDidMount() {
//     this.eventBus().emit(Block.EVENTS.FLOW_CDM);
//   }

//   _componentDidUpdate(oldProps, newProps) {
//     const response = this.componentDidUpdate(oldProps, newProps);
//     if (!response) {
//       return;
//     }

//     this._render();
//   }

//   componentDidUpdate(oldProps, newProps) {
//     return true;
//   }

//   setProps = nextProps => {
//     if (!nextProps) {
//       return;
//     }

//     Object.assign(this.props, nextProps);
//   }

//   get element() {
//     return this._element;
//   }

//   _addEvents() {
//     Object.keys(this.events).forEach((eventName: String): void => { this._element?.addEventListener(eventName, this.events ? [eventName]) });
//   }

//   addAttributes() {
//     Object.entries(this.attributes).forEach(([key, value]: [string, TValue]): void => {
//       this._element.setAttribute(key, value);
//     });
//   }

//   _render() {
//     console.log("Render")

//     const propsAndStubs = { ...this.props };
//     const _tmpId = getID();

//     Object.entries(this.children).forEach(([key, child]: [string, Block]): void => {
//       propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
//     });

//     Object.entries(this.list).forEach(([key, child]) => {
//       propsAndStubs[key] = `<div data-id="__l_${_tmpId}"></div>`;
//     });

//     const fragment = this._createDocumentElement('template');
//     fragment.innerHTML = Handlebars.compile(this.render())(propsAndStubs);

//     Object.values(this.children).forEach(child => {
//       const stub = fragment.content.querySelector(`[data-id="${child._id}"]`)
//       stub.replaceWith(child.getContent());
//     });

//     Object.entries(this.list).forEach(([key, child]) => {
//       const listCont = this._createDocumentElement('template');

//       child.forEach(item => {
//         if (item instanceof Block) {
//           listCont.content.append(item.getContent());
//         } else {
//           listCont.content.append(`${item}`);
//         }
//       });

//       const stub = fragment.content.querySelector(`[data-id="__l_${_tmpId}"]`);
//       stub.replaceWith(listCont.content);
//     });

//     const newElement = fragment.content.firstElementChild;
//     if (this._element) {
//       this._element.replaceWith(newElement);
//     }

//     this._element = newElement;
//     this._addEvents();
//     this.addAttributes();
//   }

//   render() { }

//   getContent() {
//     return this.element;
//   }

//   _makePropsProxy(props) {
//     const self = this;

//     return new Proxy(props, {
//       get(target, prop) {
//         const value = target[prop];
//         return typeof value === "function" ? value.bind(target) : value;
//       },

//       set(target, prop, value) {
//         const oldTarget = { ...target };
//         target[prop] = value;

//         self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
//         return true;
//       },

//       deleteProperty() {
//         throw new Error('Нет доступа');
//       }
//     });
//   }

//   _createDocumentElement(tagName: string) {
//     return document.createElement(tagName);
//   }

//   show() {
//     this.getContent().style.display = "block";
//   }

//   hide() {
//     this.getContent().style.display = "none";
//   }
// }
