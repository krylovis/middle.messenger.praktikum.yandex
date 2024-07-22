// import Handlebars from 'handlebars';
// import * as Components from '@/components/index';
// import * as Pages from '@/pages/index';
// import PopupWithForm from '@/components/popup/PopupWithForm';
import render from '@/utils/render';
import { editProfilePage } from '@/pages';

render('#app', editProfilePage);

// enum EPages {
//   LoginPage = 'login',
//   RegisterPage = 'register',
//   ProfilePage = 'profile-page',
//   EditProfilePage = 'edit-profile-page',
//   ChangePasswordPage = 'change-password-page',
//   MainPage = 'main-page',
//   ErrorPage = 'error-page',
// }

// const pages: any = {
//   [EPages.LoginPage]: [Pages.LoginPage],
//   [EPages.RegisterPage]: [Pages.RegisterPage],
//   [EPages.ProfilePage]: [Pages.ProfilePage],
//   [EPages.EditProfilePage]: [Pages.EditProfilePage],
//   [EPages.ChangePasswordPage]: [Pages.ChangePasswordPage],
//   [EPages.MainPage]: [Pages.MainPage],
//   [EPages.ErrorPage]: [Pages.ErrorPage],
// };

// Object.entries(Components).forEach(([name, component]) => {
//   Handlebars.registerPartial(name, component);
// });

// const app: any = document.querySelector('#app');

// function navigate(page: string, args?: { error: string, text: string }): void {
//   const [source] = pages[page];
//   const handlebarsFunct = Handlebars.compile(source);

//   app.innerHTML = handlebarsFunct(args);
// }

// document.addEventListener('DOMContentLoaded', () => {
//   switch (window.location.pathname) {
//     case '/':
//       navigate('main-page');
//       break
//     case '/login':
//       navigate('login');
//       break
//     case '/register':
//       navigate('register');
//       break
//     case '/profile':
//       navigate('profile-page');
//       break
//     case '/edit-profile':
//       navigate('edit-profile-page');
//       break
//     case '/404':
//       navigate('error-page', { error: '404', text: 'Не туда попали' });
//       break
//     case '/500':
//       navigate('error-page', { error: '500', text: 'Мы уже фиксим' });
//       break
//     case '/change-password':
//       navigate('change-password-page');
//       break
//   }
// })

// setTimeout(() => {
//   const profileEditAvatarButton = document.querySelector('.profile-avatar__edit-button');
//   const menuButton = document.querySelector('.chat-footer__menu');

//   if (menuButton) {
//     console.log('menuButton', menuButton);
//     menuButton.addEventListener('click', (event) => {
//       console.log('event', event);
//     })
//   }

//   if (profileEditAvatarButton) {
//     const popupEditAvatar = new PopupWithForm({
//       selector: '.popup_type_change-avatar',
//       handleFormSubmit: (formData: any) => {
//         console.log('formData', formData);
//       }
//     });
//     popupEditAvatar.setEventListeners();

//     function openEditAvatar() {
//       popupEditAvatar.open();
//     };

//     profileEditAvatarButton.addEventListener('click', openEditAvatar);
//   }
// }, 1000);
