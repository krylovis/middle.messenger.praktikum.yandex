import Block, { IData } from '@/utils/Block';
import store, { StoreEvents, IState } from '@/utils/Store';
import { isEqual } from "@/utils/helpers";

function connect(mapStateToProps: (state: IState) => IData) {
  return function (Component: typeof Block) {
    return class extends Component {
      constructor(props: IData) {
        let state = mapStateToProps(store.getState() as IState);
        super({ ...props, ...state });

        store.on(StoreEvents.Updated, () => {
          const newState = mapStateToProps(store.getState() as IState);
          if (!isEqual(state, newState)) {
            this.setProps({ ...newState });
          }

          state = newState;
        });
      }
    }
  }
}

export default connect;
