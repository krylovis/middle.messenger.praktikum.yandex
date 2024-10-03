import { profile } from '@/utils/constants';

import {
  Input,
  NavLink,
  ButtonArrow,
  InputField,
  ProfileAvatar,
  ProfileForm,
} from '@/components';

import ProfilePage from './ProfilePage';

const profileAvatar = new ProfileAvatar({
  avatar: profile.avatar,
  name: profile.first_name
});

// email input
const profileEmail = new Input({
  id: "profileEmail",
  name: "email",
  type: "email",
  attr: {
    class: "input_type_profile",
    value: profile.email,
    disabled: 'true',
  }
});

const profileEmailField = new InputField ({
  Input: profileEmail,
  id: "profileEmail",
  label: "Почта",
  attr: { class: "input-field_type_profile" }
});

// login input
const profileLogin = new Input({
  id: "profileLogin",
  name: "login",
  type: "text",
  attr: {
    class: "input_type_profile",
    value: profile.login,
    disabled: 'true',
  }
});

const profileLoginField = new InputField ({
  Input: profileLogin,
  id: "profileLogin",
  label: "Логин",
  attr: { class: "input-field_type_profile" }
});

// first name input
const profileFirstName = new Input({
  id: "profileFirstName",
  name: "first_name",
  type: "text",
  attr: {
    class: "input_type_profile",
    value: profile.first_name,
    disabled: 'true',
  }
});

const profileFirstNameField = new InputField ({
  Input: profileFirstName,
  id: "profileFirstName",
  label: "Имя",
  attr: { class: "input-field_type_profile" }
});

// second name input
const profileSecondName = new Input({
  id: "profileSecondName",
  name: "second_name",
  type: "text",
  attr: {
    class: "input_type_profile",
    value: profile.second_name,
    disabled: 'true',
  }
});

const profileSecondNameField = new InputField ({
  Input: profileSecondName,
  id: "profileSecondName",
  label: "Фамилия",
  attr: { class: "input-field_type_profile" }
});

// display name input
const profileDisplayName = new Input({
  id: "profileDisplayName",
  name: "display_name",
  type: "text",
  attr: {
    class: "input_type_profile",
    value: profile.display_name,
    disabled: 'true',
  }
});

const profileDisplayNameField = new InputField ({
  Input: profileDisplayName,
  id: "profileDisplayName",
  label: "Имя&nbsp;в&nbsp;чате",
  attr: { class: "input-field_type_profile" }
});

// phone input
const profilePhone = new Input({
  id: "profilePhone",
  name: "phone",
  type: "phone",
  attr: {
    class: "input_type_profile",
    value: profile.phone,
    disabled: 'true',
  }
});

const profilePhoneField = new InputField ({
  Input: profilePhone,
  id: "profilePhone",
  label: "Телефон",
  attr: { class: "input-field_type_profile" }
});

// controls
const navLinkEdit = new NavLink ({
  toPage: "edit-profile-page",
  text: "Изменить данные",
  attr: { class: "nav-link_type_profile" }
});

const navLinkPassword = new NavLink ({
  toPage: "edit-profile-page",
  text: "Изменить пароль",
  attr: { class: "nav-link_type_profile" }
});

const navLinkLogout = new NavLink ({
  toPage: "login",
  text: "Выйти",
  attr: { class: ["nav-link_type_profile", "nav-link_type_danger"]}
});

const buttonArrow = new ButtonArrow ({
  toPage: "",
});

const profileForm = new ProfileForm({
  lists: [
    profileEmailField,
    profileLoginField,
    profileFirstNameField,
    profileSecondNameField,
    profileDisplayNameField,
    profilePhoneField,
  ],

  NavLinkEdit: navLinkEdit,
  NavLinkPassword: navLinkPassword,
  NavLinkLogout: navLinkLogout,
});

export const profilePage = new ProfilePage({
  ButtonArrow: buttonArrow,
  ProfileAvatar: profileAvatar,
  ProfileForm: profileForm,
});
