import MainPage from './MainPage';
import { chatList as chatItems } from '@/utils/constants';
import { messageData } from '@/utils/constants';

import {
  NavLink,
  ChatList,
  Avatar,
  ChatItem,
  ChatHeader,
  ChatFooter,
  ChatContent,
  MessagesForDate,
  MessageItem,
  FormMessage,
  Input,
} from '@/components';

const headerAvatar = new Avatar({ });

const chatHeader = new ChatHeader ({
  Avatar: headerAvatar,
});

const messagesForDateList = messageData.map(({ date, data }) => {
  const messagesList = data.map(({
    owner, sentedAt, message, media, file
  }) => {
    const classList = [];
    if (owner) {
      classList.push('message-item_type_owner');
    }

    return new MessageItem({
      owner,
      sentedAt,
      message,
      media,
      file,
      attr: { class: classList}
    });
  });

  return new MessagesForDate({ date, lists: messagesList });
});

const chatContent = new ChatContent ({
  lists: messagesForDateList,
});

const navLink = new NavLink ({
  toPage: "to-profile",
  text: "Профиль",
  icon: true,
  attr: { class: "nav-link_type_to-profile" }
});

const chatList = chatItems.map(({
  name, message, unread, updatedAt, avatar,
}) => {
  const itemAvatar = new Avatar({ avatar });

  return new ChatItem({
    Avatar: itemAvatar,
    name,
    message,
    unread,
    updatedAt
  });
});

// chat list
const chatListComponent = new ChatList({
  NavLink: navLink,
  lists: chatList,
});

const inputMessage = new Input({
  id: "inputMessage",
  name: "message",
  type: "text",
  placeholder: "Сообщение",
  attr: { class: "input_type_message" }
});

const formMessage = new FormMessage ({
  formAction: "new-message-form",
  formName: "new-message-action",
  lists: [inputMessage],
  events: {
    submit: (event) => {
      event.preventDefault();

      const formData = new FormData(event.target as HTMLFormElement);
      for(const [name, value] of formData.entries()) {
        console.log(`${name}: ${value}`);
      }

      const { target } = event;
      (target as HTMLFormElement)?.reset();
    }
  }
});

const chatFooter = new ChatFooter ({
  FormMessage: formMessage,
});

export const mainPage = new MainPage({
  ChatList: chatListComponent,
  ChatHeader: chatHeader,
  ChatContent: chatContent,
  ChatFooter: chatFooter,
});
