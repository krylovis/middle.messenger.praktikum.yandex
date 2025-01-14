import connect from './hoc';
import { IState } from '@/utils/Store';
import { EPopupTriggers } from '@/utils/constants';

export default connect((state: IState) => ({
  [EPopupTriggers.REMOVE_USER]: state[EPopupTriggers.REMOVE_USER],
}));
