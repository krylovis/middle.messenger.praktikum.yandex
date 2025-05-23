import MainPage from './MainPage';
import { EDropdownMenuTriggers } from '@/utils/constants';
import { router } from '@/utils/Router';
import { headerMenu } from '@/utils/constants';
import store from '@/utils/Store';
import { connectWithDropdownMenuHeader } from '@/utils/connects';
import { connectWithCurrentChat } from '@/utils/connects';
import ChatsController from '@/utils/controllers/ChatsController';
import { IMessage } from '@/utils/Api/ChatWebSocket';

import {
  NavLink,
  ChatList,
  Avatar,
  ChatHeader,
  ChatFooter,
  ChatContent,
  FormMessage,
  Input,
  ButtonWithIcon,
  popupAddChat,
  popupAddUser,
  popupRemoveUser,
  DropdownMenu,
  DropdownMenuItem,
} from '@/components';

const headerAvatar = new Avatar({});

const headerMenuLists = headerMenu.map(({ type, text, trigger }) => {
  return new DropdownMenuItem({
    type: type,
    text: text,
    events: {
      click: (event) => {
        event.preventDefault();
        store.set(trigger, true);
      }
    }
  });
});

const editChatButtonMenu = new ButtonWithIcon({
  id: "editChatButtonMenu",
  type: "button",
  buttonSize: '32',
  iconName: 'menu',
  events: {
    click: () => {
      store.toggle(EDropdownMenuTriggers.HEADER_MENU);
    }
  }
});

const DropdownMenuHeader = connectWithDropdownMenuHeader(DropdownMenu);

const dropdownMenu = new DropdownMenuHeader({
  ButtonMenu: editChatButtonMenu,
  menuTrigger: EDropdownMenuTriggers.HEADER_MENU,
  lists: headerMenuLists,
  type: 'header'
});

const chatHeader = new ChatHeader({
  Avatar: headerAvatar,
  DropdownMenu: dropdownMenu,
});

const chatContent = new ChatContent({
  lists: [],
});

const navLink = new NavLink({
  text: "Профиль",
  icon: true,
  attr: { class: "nav-link_type_to-profile" },
  events: {
    click: (event) => {
      event.preventDefault();
      router.go('/profile');
    }
  }
});

// chat list
const chatList = new ChatList({
  NavLink: navLink,
});

const inputMessage = new Input({
  id: "inputMessage",
  name: "message",
  type: "text",
  placeholder: "Сообщение",
  attr: { class: "input_type_message", maxlength: '120', minlength: '1' }
});

const submitButton = new ButtonWithIcon({
  id: "inputMessage",
  type: "submit",
  buttonSize: '28',
  iconName: 'arrow-right',
});

const buttonMenu = new ButtonWithIcon({
  id: "inputMessage",
  type: "button",
  buttonSize: '32',
  iconName: 'attach',
});

const formMessage = new FormMessage({
  SubmitButton: submitButton,
  formAction: "new-message-form",
  formName: "new-message-action",
  lists: [inputMessage],
  events: {
    submit: (event) => {
      event.preventDefault();

      const { target } = event;
      const data: IMessage = {};
      const formData = new FormData(event.target as HTMLFormElement);

      for (const [name, value] of formData.entries()) {
        data[name] = value as string;
      }

      if (data.message) {
        ChatsController.sendMessage(data as IMessage);
        (target as HTMLFormElement)?.reset();
      }
    }
  }
});

const chatFooter = new ChatFooter({
  ButtonMenu: buttonMenu,
  FormMessage: formMessage,
});

const ConnectMainPage = connectWithCurrentChat(MainPage);

export const mainPage = new ConnectMainPage({
  ChatList: chatList,
  ChatHeader: chatHeader,
  ChatContent: chatContent,
  ChatFooter: chatFooter,
  PopupAddChat: popupAddChat,
  PopupAddUser: popupAddUser,
  PopupRemoveUser: popupRemoveUser,
});
