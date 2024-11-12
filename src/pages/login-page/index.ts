import { router } from '@/utils/Router';
import formDataToJson from '@/utils/formDataToJson';
import authController from '@/utils/controllers/AuthController';
import {
  Input,
  Button,
  InputError,
  InputField,
  NavLink,
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

// input password
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
  text: "Авторизоваться",
});

const navLink = new NavLink ({
  text: "Нет аккаунта?",
  events: {
    click: (event) => {
      event.preventDefault();
      router.go('/sign-up');
    }
  }
});

// form container
const formContainer = new FormContainer({
  formTitle: "Вход",
  formAction: "signin-action",
  formName: "signin-form",
  SubmitButton: submitButton,
  NavLink: navLink,
  lists: [inputLoginField, inputPasswordField],
  events: {
    submit: async (event) => {
      event.preventDefault();

      const formData = new FormData(event.target as HTMLFormElement);
      const data = formDataToJson(formData);

      authController.signIn({ data });
    }
  }
});

export const loginPage = new LoginPage({
  FormContainer: formContainer
});

