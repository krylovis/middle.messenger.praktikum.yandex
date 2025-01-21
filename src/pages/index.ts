import { loginPage } from '@/pages/login-page';
import { registerPage } from '@/pages/register-page';
import { profilePage } from '@/pages/profile-page';
import { editProfilePage } from '@/pages/edit-profile-page';
import { changePasswordPage } from '@/pages/change-password-page';
import { mainPage } from '@/pages/main-page';
import { getErrorPage } from '@/pages/error-page';

const pages = {
  '/': loginPage,
  '/sign-up': registerPage,
  '/messenger': mainPage,
  '/settings': editProfilePage,
  '/profile': profilePage,
  '/change-password': changePasswordPage,
  '/404': getErrorPage('404'),
  '/500': getErrorPage('500'),
};

export default pages;
export const keysOfPages = Object.keys(pages);

export {
  loginPage,
  registerPage,
  profilePage,
  editProfilePage,
  changePasswordPage,
  mainPage,
  getErrorPage,
};
