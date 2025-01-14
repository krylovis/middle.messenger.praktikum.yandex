import PopupContainer from '../popup-container';
import { connectWithAddUserPopup } from '@/utils/connects';
import AddUserContent from './AddUserContent';
import store from '@/utils/Store';
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
  name: "user-id",
  type: "text",
  placeholder: "Введите ID пользователя",
});

const inputAddUserError = new InputError({
  attr: { class: "user-id-error" }
});

const inputLoginField = new InputField({
  Input: inputAddUser,
  InputError: inputAddUserError,
  id: "inputAddUser",
  label: "ID пользователя",
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
      const object: {
        users: number[],
        chatId: number | null,
      } = {
        users: [],
        chatId: null,
      };

      const formData = new FormData(event.target as HTMLFormElement);

      for (const [, value] of formData.entries()) {
        object.users.push(parseInt(value as string));
      }

      const currentChat = store.getState('currentChat');

      if (currentChat && formData) {
        object.chatId = currentChat as number;
        const data = JSON.stringify(object);
        chatsController.addUserToChat({ data });
      }
    },
  }
});

const connectPopupContainer = connectWithAddUserPopup(PopupContainer);
export const popupAddUser = new connectPopupContainer({
  title: 'Добавить пользователя',
  content: addUserContent,
  popupTrigger: EPopupTriggers.ADD_USER,
});
