import MainPage from './MainPage';
import { chatList as chatItems } from '@/utils/constants';

import {
  NavLink,
  ChatList,
  Avatar,
  ChatItem
} from '@/components';

const navLink = new NavLink ({
  toPage: "to-profile",
  text: "Профиль",
  icon: true,
  attr: { class: "nav-link_type_to-profile" }
});

const lists = chatItems.map(({
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
const chatList = new ChatList({
  NavLink: navLink,
  lists,
});

export const mainPage = new MainPage({
  ChatList: chatList,
});
