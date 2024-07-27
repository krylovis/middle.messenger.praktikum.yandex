import PopupContainer from '../popup-container';
import ChangeAvatarContent from './ChangeAvatarContent';

import { Button } from '@/components';

const button = new Button ({
  text: 'Поменять',
  type: 'submit',
});

const changeAvatarContent = new ChangeAvatarContent({
  Button: button,
});

export const popupChangeAvatar = new PopupContainer({
  title: 'Загрузите файл',
  content: changeAvatarContent,
  attr: { class: 'popup_type_change-avatar' }
});
