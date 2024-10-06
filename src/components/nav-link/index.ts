import { Block, IData } from '@/utils/Block';
import { navLinkTemplate } from './template';

export default class NavLink extends Block<IData> {
  render() {
    return navLinkTemplate;
  }
}
