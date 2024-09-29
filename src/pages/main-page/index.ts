import MainPage from './MainPage';
import { chatList as chatItems } from '@/utils/constants';
// import { messageList } from '@/utils/constants';

import {
  NavLink,
  ChatList,
  Avatar,
  ChatItem,
  ChatHeader,
  ChatFooter,
  ChatContent,
} from '@/components';

const headerAvatar = new Avatar({ });

const chatHeader = new ChatHeader ({
  Avatar: headerAvatar,
});

const chatFooter = new ChatFooter ({});
const chatContent = new ChatContent ({
  // lists: [],
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

export const mainPage = new MainPage({
  ChatList: chatListComponent,
  ChatHeader: chatHeader,
  ChatContent: chatContent,
  ChatFooter: chatFooter,
});
