import { profile, PASSWORD_PATTERN } from '@/utils/constants';


import {
  Input,
  InputError,
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

// old password
const oldPassword = new Input({
  id: "oldPassword",
  name: "password",
  type: "password",
  placeholder: "Введите пароль",
  attr: { class: "input_type_profile" }
});

const oldPasswordError = new InputError({
  attr: { class: "password-error" }
});

const oldPasswordField = new InputField ({
  Input: oldPassword,
  InputError: oldPasswordError,
  id: "oldPassword",
  label: "Старый&nbsp;пароль",
  attr: { class: "input-field_type_profile" }
});

// new password
const newPassword = new Input({
  id: "newPassword",
  name: "password",
  type: "password",
  placeholder: "Введите пароль",
  attr: {
    class: "input_type_profile",
    pattern: PASSWORD_PATTERN,
  }
});

const newPasswordError = new InputError({
  attr: { class: "password-error" }
});

const newPasswordField = new InputField ({
  Input: newPassword,
  InputError: newPasswordError,
  id: "newPassword",
  label: "Новый&nbsp;пароль",
  attr: { class: "input-field_type_profile" }
});

// repeat new password
const repeatNewPassword = new Input({
  id: "repeatNewPassword",
  name: "password",
  type: "password",
  placeholder: "Введите пароль",
  attr: {
    class: "input_type_profile",
    pattern: PASSWORD_PATTERN,
  }
});

const repeatNewPasswordError = new InputError({
  attr: { class: "password-error" }
});

const repeatNewPasswordField = new InputField ({
  Input: repeatNewPassword,
  InputError: repeatNewPasswordError,
  id: "repeatNewPassword",
  label: "Повторите&nbsp;новый&nbsp;пароль",
  attr: { class: "input-field_type_profile" }
});

// controls
const submitButton = new Button ({
  type: "submit",
  text: "Сохранить",
  attr: { class: "button_type_profile" },
});

const buttonArrow = new ButtonArrow ({
  toPage: "",
});

const profileForm = new ProfileForm({
  lists: [
    oldPasswordField,
    newPasswordField,
    repeatNewPasswordField,
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

export const changePasswordPage = new ProfilePage({
  ButtonArrow: buttonArrow,
  ProfileAvatar: profileAvatar,
  ProfileForm: profileForm
});
