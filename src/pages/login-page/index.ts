import {
  Input,
  Button,
  InputError,
  InputField,
  FormContainer
} from '@/components';

import LoginPage from './LoginPage';

// login input
const inputLogin = new Input({
  id: "inputLogin",
  name: "login",
  type: "text",
  placeholder: "Введите логин",
});

const inputLoginError = new InputError({
  attr: { class: "login-error" }
});

const inputLoginField = new InputField ({
  Input: inputLogin,
  InputError: inputLoginError,
  id: "inputLogin",
  label: "Логин",
});

// login password
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

const submitButton = new Button ({
  type: "submit",
  text: "Авторизоваться",
});

// form container
const formContainer = new FormContainer({
  formTitle: "Вход",
  formAction: "signin-action",
  formName: "signin-form",
  submitText: "Авторизоваться",
  linkText: "Нет аккаунта?",
  toPage: "register",
  submitButton: submitButton,
  lists: [inputLoginField, inputPasswordField]
});

export const loginPage = new LoginPage({
  FormContainer: formContainer
});

