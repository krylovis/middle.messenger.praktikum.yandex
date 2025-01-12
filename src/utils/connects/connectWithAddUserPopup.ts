import connect from './hoc';
import { IState } from '@/utils/Store';
import { EPopupTriggers } from '@/utils/constants';

export default connect((state: IState) => ({
  [EPopupTriggers.ADD_USER]: state[EPopupTriggers.ADD_USER],
}));
