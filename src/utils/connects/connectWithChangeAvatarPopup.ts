import connect from './hoc';
import { IState } from '@/utils/Store';
import { EPopupTriggers } from '@/utils/constants';

export default connect((state: IState) => ({
  [EPopupTriggers.AVATAR_CHANGE]: state[EPopupTriggers.AVATAR_CHANGE],
}));
