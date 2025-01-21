import Block, { IData } from '@/utils/Block';
import { mainPageTemplate } from './template';
import store, { Store, StoreEvents, IChat } from '@/utils/Store';

export default class MainPage extends Block<IData> {
  store: Store;

  constructor(props: IData) {
    super({
      ...props,
    })

    this.store = store;
    this.store.on(StoreEvents.Updated, () => {
      this.chatHeaderUpdate();
    })
  }

  chatHeaderUpdate() {
    const { currentChat } = this.props;

    if (currentChat) {
      this.children?.Avatar?.setProps({ avatar: (currentChat as IChat)?.avatar });
      this.children?.ChatHeader?.setProps({ chatName: (currentChat as IChat)?.title });
    }
  }

  componentBeforeMount() {
    this.chatHeaderUpdate();
  }

  override render() {
    return mainPageTemplate
  }
}
