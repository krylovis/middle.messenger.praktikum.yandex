import avatar from '../../../static/images/captain-jack-sparrow.jpg';

import {
  Input,
  Button,
  InputError,
  InputField,
  ProfileForm
} from '@/components';

import ProfilePage from './ProfilePage';

const profile = {
  login: 'captain-jack-sparrow',
  first_name: 'Jack',
  second_name: 'Sparrow',
  display_name: 'Captain' ,
  email: 'jack-sparrow@captain.ar',
  phone: '+7 (909) 967 30 30',
  avatar: avatar,
};

export const profilePage = new ProfilePage({
  // ProfileForm: profileForm
});
