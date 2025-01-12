import PopupContainer from '../popup-container';
import { connectWithAddUserPopup } from '@/utils/connects';
import AddUserContent from './AddUserContent';
import store from '@/utils/Store';
import formDataToJson from '@/utils/formDataToJson';
import chatsController from '@/utils/controllers/ChatsController';
import {
  InputError,
  InputField,
  Input,
  Button,
} from '@/components';
import { EPopupTriggers } from '@/utils/constants';

const inputAddUser = new Input({
  id: "inputAddUser",
  name: "login",
  type: "text",
  placeholder: "Введите логин пользователя",
});

const inputAddUserError = new InputError({
  attr: { class: "login-error" }
});

const inputLoginField = new InputField({
  Input: inputAddUser,
  InputError: inputAddUserError,
  id: "inputAddUser",
  label: "Логин",
});

const button = new Button({
  text: 'Добавить',
  type: 'submit',
});

const addUserContent = new AddUserContent({
  Input: inputLoginField,
  Button: button,
  events: {
    submit: (event) => {
      event.preventDefault();
      // const data = {
      //   users: [],
      //   chatId: '',
      // };

      const formData = new FormData(event.target as HTMLFormElement);

      const newFormData = new FormData();

      for (const [name, value] of formData.entries()) {
        newFormData.append('users', [value]);
        // newFormData.append('users', JSON.stringify([value]));
      }

      const currentChat = store.getState('currentChat');
      console.log('currentChat', currentChat);

      if (currentChat && formData) {
      }
    }
  }
});

const connectPopupContainer = connectWithAddUserPopup(PopupContainer);
export const popupAddUser = new connectPopupContainer({
  title: 'Добавить пользователя',
  content: addUserContent,
  popupTrigger: EPopupTriggers.ADD_USER,
});
