import Block, { TProps } from "@/utils/Block/index";
import { isEqualValue } from "@/utils/helpers";
import render from '@/utils/render';

interface IRouteData {
	block: Block,
	pathname?: string,
  props?: TProps,
}

export class Route {
  _pathname;
  _block: Block;
  _props;

  constructor({ pathname, block, props }: IRouteData) {
    this._pathname = pathname;
    this._block = block;
    this._props = props;
  }

  navigate(pathname: string): void {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.getContent()?.remove();
    }
  }

  match(pathname: string): boolean {
    return isEqualValue(pathname, this._pathname);
  }

  render() {
    if (this._block) {
      render('#app', this._block);

      return;
    }
  }
}
