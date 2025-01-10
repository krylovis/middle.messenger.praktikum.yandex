import MainPage from './MainPage';
import { messageData, EDropdownMenuTriggers } from '@/utils/constants';
import { router } from '@/utils/Router';
import { headerMenu } from '@/utils/constants';
import store from '@/utils/Store';
import { connectWithDropdownMenuHeader } from '@/utils/connects';

import {
  NavLink,
  ChatList,
  Avatar,
  ChatHeader,
  ChatFooter,
  ChatContent,
  MessagesForDate,
  MessageItem,
  FormMessage,
  Input,
  ButtonWithIcon,
  popupAddChat,
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
      attr: { class: classList }
    });
  });

  return new MessagesForDate({ date, lists: messagesList });
});

const chatContent = new ChatContent({
  lists: messagesForDateList,
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
  attr: { class: "input_type_message" }
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

      const formData = new FormData(event.target as HTMLFormElement);
      for (const [name, value] of formData.entries()) {
        console.log(`${name}: ${value}`);
      }

      const { target } = event;
      (target as HTMLFormElement)?.reset();
    }
  }
});

const chatFooter = new ChatFooter({
  ButtonMenu: buttonMenu,
  FormMessage: formMessage,
});

export const mainPage = new MainPage({
  ChatList: chatList,
  ChatHeader: chatHeader,
  ChatContent: chatContent,
  ChatFooter: chatFooter,
  PopupAddChat: popupAddChat,
});
