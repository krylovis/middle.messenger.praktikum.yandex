import avatar from '../../../static/images/captain-jack-sparrow.jpg';

import {
  Input,
  Button,
  InputError,
  InputField,
  ProfileAvatar,
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

const profileAvatar = new ProfileAvatar({
  avatar,
  name: profile.first_name
});

const profileForm = new ProfileForm({
  // NavLinkEdit: ,
  // NavLinkPass: ,
  // NavLinkLogout: ,
  lists: []
});

export const profilePage = new ProfilePage({
  ProfileAvatar: profileAvatar,
  ProfileForm: profileForm
});
