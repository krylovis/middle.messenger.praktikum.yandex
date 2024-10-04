import { profile, EMAIL_PATTERN, PHONE_PATTERN, NAME_PATTERN, LOGIN_PATTERN } from '@/utils/constants';

import {
  Input,
  Button,
  ButtonArrow,
  InputField,
  InputError,
  ProfileAvatar,
  ProfileForm,
  popupChangeAvatar
} from '@/components';

import ProfilePage from '../profile-page/ProfilePage';

const profileAvatar = new ProfileAvatar({
  avatar: profile.avatar,
  isEditAvatar: true,
});

// email input
const profileEmail = new Input({
  id: "profileEmail",
  name: "email",
  type: "email",
  attr: {
    class: "input_type_profile",
    value: profile.email,
    pattern: EMAIL_PATTERN,
  }
});

const inputEmailError = new InputError({
  attr: { class: "email-error" }
});

const profileEmailField = new InputField ({
  Input: profileEmail,
  InputError: inputEmailError,
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
    pattern: LOGIN_PATTERN,
  }
});

const inputLoginError = new InputError({
  attr: { class: "login-error" }
});

const profileLoginField = new InputField ({
  Input: profileLogin,
  InputError: inputLoginError,
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
    pattern: NAME_PATTERN,
  }
});

const inputFirstNameError = new InputError({
  attr: { class: "first-name-error" }
});

const profileFirstNameField = new InputField ({
  Input: profileFirstName,
  InputError: inputFirstNameError,
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
    pattern: NAME_PATTERN,
  }
});

const inputSecondNameError = new InputError({
  attr: { class: "second-name-error" }
});

const profileSecondNameField = new InputField ({
  Input: profileSecondName,
  InputError: inputSecondNameError,
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

const inputDisplayNameError = new InputError({
  attr: { class: "display-name-error" }
});

const profileDisplayNameField = new InputField ({
  Input: profileDisplayName,
  InputError: inputDisplayNameError,
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
    pattern: PHONE_PATTERN,
  }
});

const inputPhoneError = new InputError({
  attr: { class: "phone-error" }
});

const profilePhoneField = new InputField ({
  Input: profilePhone,
  InputError: inputPhoneError,
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
  events: {
    submit: (event) => {
      event.preventDefault();

      const formData = new FormData(event.target as HTMLFormElement);
      for(const [name, value] of formData.entries()) {
        console.log(`${name}: ${value}`);
      }
    }
  }
});

export const editProfilePage = new ProfilePage({
  ButtonArrow: buttonArrow,
  ProfileAvatar: profileAvatar,
  ProfileForm: profileForm,
  PopupChangeAvatar: popupChangeAvatar,
});
