import avatar from '../../../static/images/captain-jack-sparrow.jpg';

import {
  Input,
  NavLink,
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

const navLinkEdit = new NavLink ({
  toPage: "edit-profile-page",
  text: "Изменить данные",
  attr: { class: "nav-link_type_profile" }
});

const navLinkPassword = new NavLink ({
  toPage: "edit-profile-page",
  text: "Изменить пароль",
  attr: { class: "nav-link_type_profile" }
});

const navLinkLogout = new NavLink ({
  toPage: "login",
  text: "Выйти",
  attr: { class: ["nav-link_type_profile", "nav-link_type_danger"]}
});

const profileForm = new ProfileForm({
  lists: [],

  NavLinkEdit: navLinkEdit,
  NavLinkPassword: navLinkPassword,
  NavLinkLogout: navLinkLogout,
});

export const profilePage = new ProfilePage({
  ProfileAvatar: profileAvatar,
  ProfileForm: profileForm
});
