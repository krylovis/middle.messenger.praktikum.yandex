import Handlebars from 'handlebars';
import avatar from '../../../static/images/captain-jack-sparrow.jpg';

import './edit-profile-page.scss';
export { default as EditProfilePage } from './edit-profile-page.hbs?raw';

Handlebars.registerHelper('profile', () => ({
  login: 'captain-jack-sparrow',
  first_name: 'Jack',
  second_name: 'Sparrow',
  display_name: 'Captain' ,
  email: 'jack-sparrow@captain.ar',
  phone: '+7 (909) 967 30 30',
  avatar: avatar,
}));