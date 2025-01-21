import PopupContainer from '../popup-container';
import { connectWithAddChatPopup } from '@/utils/connects';
import AddChatContent from './AddChatContent';
import formDataToJson from '@/utils/formDataToJson';
import chatsController from '@/utils/controllers/ChatsController';
import {
  InputError,
  InputField,
  Input,
  Button,
} from '@/components';
import { EPopupTriggers } from '@/utils/constants';

const inputAddChat = new Input({
  id: "inputAddChat",
  name: "title",
  type: "text",
  placeholder: "Введите название чата",
});

const inputAddChatError = new InputError({
  attr: { class: "login-error" }
});

const inputLoginField = new InputField({
  Input: inputAddChat,
  InputError: inputAddChatError,
  id: "inputAddChat",
  label: "Название чата",
});

const button = new Button ({
  text: 'Добавить',
  type: 'submit',
});

const addChatContent = new AddChatContent({
  Input: inputLoginField,
  Button: button,
  events: {
    submit: (event) => {
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
      const data = formDataToJson(formData);
      chatsController.createChat({ data });
    }
  }
});

const connectPopupContainer = connectWithAddChatPopup(PopupContainer);
export const popupAddChat = new connectPopupContainer({
  title: 'Добавить чат',
  content: addChatContent,
  popupTrigger: EPopupTriggers.ADD_CHAT,
});
