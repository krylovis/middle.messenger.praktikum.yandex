import Handlebars from 'handlebars';
import * as Components from './components/index';
import * as Pages from './pages/index';
import PopupWithForm from './components/popup/PopupWithForm';

const pages = {
  'login': [ Pages.LoginPage ],
  'register': [ Pages.RegisterPage ],
  'profile-page': [ Pages.ProfilePage ],
  'edit-profile-page': [ Pages.EditProfilePage ],
  'change-password-page': [ Pages.ChangePasswordPage ],
  'main-page': [ Pages.MainPage ],
};

Object.entries(Components).forEach(([ name, component ]) => {
  Handlebars.registerPartial(name, component);
});

const app = document.querySelector('#app');

function navigate(page) {
  const [ source, args ] = pages[page];
  const handlebarsFunct = Handlebars.compile(source);
  
  app.innerHTML = handlebarsFunct(args);
}

// document.addEventListener('DOMContentLoaded', () => navigate('profile-page'));
document.addEventListener('DOMContentLoaded', () => navigate('main-page'));

setTimeout(() => {
  const profileEditAvatarButton = document.querySelector('.profile-avatar__edit-button');
  if(profileEditAvatarButton) {
    const popupEditAvatar = new PopupWithForm({
      selector: '.popup_type_change-avatar',
      handleFormSubmit: (formData) => {
        console.log('formData', formData);
      }
    });
    popupEditAvatar.setEventListeners();
  
    function openEditAvatar() {
      popupEditAvatar.open();
    };
  
    profileEditAvatarButton.addEventListener('click', openEditAvatar);
  }
}, 1000);

