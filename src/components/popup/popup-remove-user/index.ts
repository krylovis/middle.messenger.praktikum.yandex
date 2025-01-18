import PopupContainer from '../popup-container';
import { connectWithRemoveUserPopup } from '@/utils/connects';
import RemoveUserContent from './RemoveUserContent';
import store from '@/utils/Store';
import chatsController from '@/utils/controllers/ChatsController';
import {
  InputError,
  InputField,
  Input,
  Button,
} from '@/components';
import { EPopupTriggers } from '@/utils/constants';

const inputRemoveUser = new Input({
  id: "inputRemoveUser",
  name: "user-id",
  type: "text",
  placeholder: "Введите ID пользователя",
});

const inputRemoveUserError = new InputError({
  attr: { class: "user-id-error" }
});

const inputLoginField = new InputField({
  Input: inputRemoveUser,
  InputError: inputRemoveUserError,
  id: "inputRemoveUser",
  label: "ID пользователя",
});

const button = new Button({
  text: 'Удалить',
  type: 'submit',
});

const removeUserContent = new RemoveUserContent({
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

      const currentChatId = store.getState('currentChatId');

      if (currentChatId && formData) {
        object.chatId = currentChatId as number;
        const data = JSON.stringify(object);
        chatsController.removeUserFromChat({ data });
      }
    },
  }
});

const connectPopupContainer = connectWithRemoveUserPopup(PopupContainer);
export const popupRemoveUser = new connectPopupContainer({
  title: 'Удалить пользователя',
  content: removeUserContent,
  popupTrigger: EPopupTriggers.REMOVE_USER,
});
