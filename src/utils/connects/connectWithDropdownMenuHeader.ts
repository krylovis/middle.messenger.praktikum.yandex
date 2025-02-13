import connect from './hoc';
import { IState } from '@/utils/Store';
import { EDropdownMenuTriggers } from '@/utils/constants';

export default connect((state: IState) => ({
  [EDropdownMenuTriggers.HEADER_MENU]: state[EDropdownMenuTriggers.HEADER_MENU],
}));
