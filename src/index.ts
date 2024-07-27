import * as Pages from '@/pages/index';
import render from '@/utils/render';

import PopupWithForm from '@/components/popup/PopupWithForm';

enum EPages {
  LoginPage = 'login',
  RegisterPage = 'register',
  ProfilePage = 'profile-page',
  EditProfilePage = 'edit-profile-page',
  ChangePasswordPage = 'change-password-page',
  MainPage = 'main-page',
  // ErrorPage = 'error-page',
}

const pages: any = {
  [EPages.LoginPage]: [Pages.loginPage],
  [EPages.RegisterPage]: [Pages.registerPage],
  [EPages.ProfilePage]: [Pages.profilePage],
  [EPages.EditProfilePage]: [Pages.editProfilePage],
  [EPages.ChangePasswordPage]: [Pages.changePasswordPage],
  [EPages.MainPage]: [Pages.mainPage],
  // [EPages.ErrorPage]: [Pages.ErrorPage],
};

const app: any = document.querySelector('#app');

function navigate(page: string, args?: { error: string, text: string }): void {
  const [source] = pages[page];
  render('#app', source);
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
      navigate('error-page', { error: '404', text: 'Не туда попали' });
      break
    case '/500':
      navigate('error-page', { error: '500', text: 'Мы уже фиксим' });
      break
    case '/change-password':
      navigate('change-password-page');
      break
  }
})

const profileEditAvatarButton = document.querySelector('.profile-avatar__edit-button');
// const menuButton = document.querySelector('.chat-footer__menu');

// if (menuButton) {
//   menuButton.addEventListener('click', (event) => {
//     console.log('event', event);
//   })
// }

if (profileEditAvatarButton) {
  const popupEditAvatar = new PopupWithForm({
    selector: '.popup_type_change-avatar',
    handleFormSubmit: (formData: any) => {
      console.log('formData', formData);
    }
  });
  popupEditAvatar.setEventListeners();

  function openEditAvatar() {
    popupEditAvatar.open();
  };

  profileEditAvatarButton.addEventListener('click', openEditAvatar);
}
