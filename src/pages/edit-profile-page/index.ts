import { profile } from '@/utils/constants';

import {
  Input,
  Button,
  ButtonArrow,
  InputField,
  ProfileAvatar,
  ProfileForm
} from '@/components';

import ProfilePage from '../profile-page/ProfilePage';

const profileAvatar = new ProfileAvatar({
  avatar: profile.avatar,
});

// email input
const profileEmail = new Input({
  id: "profileEmail",
  name: "email",
  type: "email",
  attr: {
    class: "input_type_profile",
    value: profile.email,
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
  }
});

const profilePhoneField = new InputField ({
  Input: profilePhone,
  id: "profilePhone",
  label: "Телефон",
  attr: { class: "input-field_type_profile" }
});

// controls
const submitButton = new Button ({
  type: "submit",
  text: "Сохранить",
  attr: { class: "button_type_profile" }
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

  SubmitButton: submitButton,
});

export const editProfilePage = new ProfilePage({
  ButtonArrow: buttonArrow,
  ProfileAvatar: profileAvatar,
  ProfileForm: profileForm
});
