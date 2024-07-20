import {
  Input,
  InputError,
  InputField,
  FormContainer
} from '@/components';

import LoginPage from './LoginPage';

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

const formContainer = new FormContainer({
  formTitle: "Вход",
  formAction: "signin-action",
  formName: "signin-form",
  submitText: "Авторизоваться",
  linkText: "Нет аккаунта?",
  toPage: "register",
  lists: [inputLoginField]
});

export const loginPage = new LoginPage({
  FormContainer: formContainer
});

