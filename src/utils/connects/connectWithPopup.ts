import connect from './hoc';
import { IState } from '@/utils/Store';

export default connect((state: IState) => ({
  isPopupOpen: state.isPopupOpen,
}));
