import { FormContainer } from '@/components';

import LoginPage from './LoginPage';

const formContainer = new FormContainer({
  formTitle: 'Вход',
  formAction: "signin-action",
  formName: "signin-form",
  submitText: "Авторизоваться",
  linkText: "Нет аккаунта?",
  toPage: "register",
});

export const loginPage = new LoginPage({
  FormContainer: formContainer
});

