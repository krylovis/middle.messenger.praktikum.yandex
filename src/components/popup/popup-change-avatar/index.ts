import PopupContainer from '../popup-container';
import { connectWithChangeAvatarPopup } from '@/utils/connects';
import ChangeAvatarContent from './ChangeAvatarContent';
import userController from '@/utils/controllers/UserController';
import { Button } from '@/components';
import { EPopupTriggers } from '@/utils/constants';

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

const connectPopupContainer = connectWithChangeAvatarPopup(PopupContainer);
export const popupChangeAvatar = new connectPopupContainer({
  title: 'Загрузите файл',
  content: changeAvatarContent,
  popupTrigger: EPopupTriggers.AVATAR_CHANGE,
  attr: { class: 'popup_type_change-avatar' }
});
