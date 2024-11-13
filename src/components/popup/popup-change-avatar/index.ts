import PopupContainer from '../popup-container';
import ChangeAvatarContent from './ChangeAvatarContent';
import userController from '@/utils/controllers/UserController';

import { Button } from '@/components';

const button = new Button ({
  text: 'Поменять',
  type: 'submit',
});

const changeAvatarContent = new ChangeAvatarContent({
  Button: button,
  events: {
    submit: (event) => {
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
      userController.changeAvatar({ data: formData });
    }
  }
});

export const popupChangeAvatar = new PopupContainer({
  title: 'Загрузите файл',
  content: changeAvatarContent,
  attr: { class: 'popup_type_change-avatar' }
});
