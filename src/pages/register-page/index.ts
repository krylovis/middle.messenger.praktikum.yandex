import {
  Input,
  Button,
  InputError,
  InputField,
  NavLink,
  FormContainer
} from '@/components';

import RegisterPage from './RegisterPage';

// email input
const inputEmail = new Input({
  id: "inputEmail",
  name: "email",
  type: "email",
  placeholder: "Введите почту",
});

const inputEmailError = new InputError({
  attr: { class: "email-error" }
});

const inputEmailField = new InputField ({
  Input: inputEmail,
  InputError: inputEmailError,
  id: "inputEmail",
  label: "Почта",
});

// password input
const inputPassword = new Input({
  id: "inputPassword",
  name: "password",
  type: "password",
  placeholder: "Введите пароль",
});

const inputPasswordError = new InputError({
  attr: { class: "password-error" }
});

const inputPasswordField = new InputField ({
  Input: inputPassword,
  InputError: inputPasswordError,
  id: "inputPassword",
  label: "Пароль",
});

// first name input
const inputFirstName = new Input({
  id: "firstName",
  name: "first_name",
  type: "text",
  placeholder: "Введите имя",
});

const inputFirstNameError = new InputError({
  attr: { class: "first_name-error" }
});

const inputFirstNameField = new InputField ({
  Input: inputFirstName,
  InputError: inputFirstNameError,
  id: "firstName",
  label: "Имя",
});

// second name input
const inputSecondName = new Input({
  id: "secondName",
  name: "second_name",
  type: "text",
  placeholder: "Введите фамилию",
});

const inputSecondNameError = new InputError({
  attr: { class: "second_name-error" }
});

const inputSecondNameField = new InputField ({
  Input: inputSecondName,
  InputError: inputSecondNameError,
  id: "secondName",
  label: "Фамилия",
});

// phone input
const inputPhone = new Input({
  id: "inputPhone",
  name: "phone",
  type: "phone",
  placeholder: "Введите телефон",
});

const inputPhoneError = new InputError({
  attr: { class: "password-error" }
});

const inputPhoneField = new InputField ({
  Input: inputPhone,
  InputError: inputPhoneError,
  id: "inputPhone",
  label: "Телефон",
});

// input repeat password
const inputRepeatPassword = new Input({
  id: "inputRepeatPassword",
  name: "repeat_password",
  type: "password",
  placeholder: "Повторите пароль",
});

const inputRepeatPasswordError = new InputError({
  attr: { class: "repeat_password-error" }
});

const inputRepeatPasswordField = new InputField ({
  Input: inputRepeatPassword,
  InputError: inputRepeatPasswordError,
  id: "inputRepeatPassword",
  label: "Пароль (ещё раз)",
});

// controls
const submitButton = new Button ({
  type: "submit",
  text: "Зарегистрироваться",
});

const navLink = new NavLink ({
  toPage: "login",
  text: "Войти",
});

// form container
const formContainer = new FormContainer({
  formTitle: "Регистрация",
  formAction: "signup-action",
  formName: "signup-form",
  SubmitButton: submitButton,
  NavLink: navLink,
  lists: [
    inputEmailField,
    inputFirstNameField,
    inputSecondNameField,
    inputPhoneField,
    inputPasswordField,
    inputRepeatPasswordField,
  ]
});

export const registerPage = new RegisterPage({
  FormContainer: formContainer
});

