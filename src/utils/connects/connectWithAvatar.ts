import connect from './hoc';
import { IState } from '@/utils/Store';

export default connect((state: IState) => ({
  name: state.currentUser?.first_name,
  avatar: state.currentUser?.avatar,
}));
