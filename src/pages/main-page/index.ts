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
} from '@/components';

const headerAvatar = new Avatar({ });

const chatHeader = new ChatHeader ({
  Avatar: headerAvatar,
});

const messagesForDateList = messageData.map(({ date, data }) => {
  const messagesList = data.map(({
    owner, sentedAt, message, media, file
  }) => {
    return new MessageItem({
      owner, sentedAt, message, media, file
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

const chatFooter = new ChatFooter ({});

export const mainPage = new MainPage({
  ChatList: chatListComponent,
  ChatHeader: chatHeader,
  ChatContent: chatContent,
  ChatFooter: chatFooter,
});
