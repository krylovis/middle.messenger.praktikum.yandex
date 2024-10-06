import Block from '@/utils/Block/index';
import * as Pages from '@/pages/index';
import render from '@/utils/render';
import { EPages } from '@/utils/constants';

type TPages = Record<EPages, Block[] | ((err: string) => Block)[]>

const pages: TPages = {
  [EPages.LoginPage]: [Pages.loginPage],
  [EPages.RegisterPage]: [Pages.registerPage],
  [EPages.ProfilePage]: [Pages.profilePage],
  [EPages.EditProfilePage]: [Pages.editProfilePage],
  [EPages.ChangePasswordPage]: [Pages.changePasswordPage],
  [EPages.MainPage]: [Pages.mainPage],
  [EPages.ErrorPage]: [Pages.getErrorPage],
};

type TKeyOfTPages = keyof typeof pages;

function navigate(page: string, arg?: { error: string }): void {
  const [source] = pages[page as TKeyOfTPages];

  if (arg?.error) {
    render('#app', (source as ((err: string) => Block))(arg.error));
  } else {
    render('#app', source as Block);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  switch (window.location.pathname) {
    case '/':
      navigate('main-page');
      break
    case '/login':
      navigate('login');
      break
    case '/register':
      navigate('register');
      break
    case '/profile':
      navigate('profile-page');
      break
    case '/edit-profile':
      navigate('edit-profile-page');
      break
    case '/404':
      navigate('error-page', { error: '404' });
      break
    case '/500':
      navigate('error-page', { error: '500' });
      break
    case '/change-password':
      navigate('change-password-page');
      break
  }
})
