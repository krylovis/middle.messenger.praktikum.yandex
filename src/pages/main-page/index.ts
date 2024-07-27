import MainPage from './MainPage';

import {
  NavLink,
  ChatList
} from '@/components';

const navLink = new NavLink ({
  toPage: "to-profile",
  text: "Профиль",
  icon: true,
  attr: { class: "nav-link_type_to-profile" }
});

// chat list
const chatList = new ChatList({
  NavLink: navLink,
  lists: []
});

export const mainPage = new MainPage({
  ChatList: chatList,
});
