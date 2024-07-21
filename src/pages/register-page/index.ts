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
  lists: [inputEmailField, inputPasswordField]
});

export const registerPage = new RegisterPage({
  FormContainer: formContainer
});

