import Block from "@/utils/Block/index";
import { Route } from "@/utils/Route";
import { getErrorPage } from '@/pages/index';
import render from '@/utils/render';

class Router {
  static __instance: Router = new Router();

  routes: Route[] = [];
  history: History = window.history;
  currentRoute: Route | null = null;

  constructor() {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this.currentRoute = null;

    Router.__instance = this;
  }

  use(pathname: string, block: Block) {
    const route = new Route({ pathname, block });
    this.routes.push(route);
    return this;
  }

  start() {
    window.onpopstate = ((event: PopStateEvent) => {
      const target = event.currentTarget as Window;
      this._onRoute(target.location.pathname);
    }).bind(this);

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (!route) {
      const errorPage = getErrorPage('404');
      render('#app', errorPage);
      return;
    }

    if (this.currentRoute && this.currentRoute !== route) {
      this.currentRoute.leave();
    }

    route.render();
    this.currentRoute = route;
  }

  go(pathname: string) {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }
}

export const router = new Router();
