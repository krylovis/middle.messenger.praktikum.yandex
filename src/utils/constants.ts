import avatar from '../../static/images/captain-jack-sparrow.jpg';

export const BASE_URL = '';
export const HEADERS = {
  'Content-Type': 'application/json',
};

export const profile = {
  login: 'captain-jack-sparrow',
  first_name: 'Jack',
  second_name: 'Sparrow',
  display_name: 'Captain' ,
  email: 'jack-sparrow@captain.ar',
  phone: '+7 (909) 967 30 30',
  avatar: avatar,
};

export const errors: Record<string, Record<string, string>> = {
  '404': {
    errorNum: '404',
    text: 'Не туда попали',
  },
  '500': {
    errorNum: '500',
    text: 'Мы уже фиксим'
  }
};

export const chatList = [
  { name: 'Опоссум', message: 'Изображение', unread: '2', updatedAt: '10:50', avatar },
  { name: 'Енот', message:'Go на свалку!', unread: '2', updatedAt: '9:10', avatar },
  { name: 'Барсук', message:'А у кого ключи от сарая?', unread: '4', updatedAt: '13:21', avatar },
  { name: 'noName', message:'...', unread: '1', updatedAt: 'Пт', avatar },
  { name: 'noName', message:'...', unread: '1', updatedAt: 'Ср', avatar },
  { name: 'noName', message:'...', unread: '1', updatedAt: 'Пн', avatar },
  { name: 'noName', message:'...', unread: '1', updatedAt: 'Пт', avatar },
  { name: 'noName', message:'...', unread: '1', updatedAt: 'Пт', avatar },
  { name: 'noName', message:'...', unread: '1', updatedAt: 'Пт', avatar },
  { name: 'noName', message:'...', unread: '1', updatedAt: 'Пт', avatar },
  { name: 'noName', message:'...', unread: '1', updatedAt: 'Пт', avatar },
  { name: 'noName', message:'...', unread: '1', updatedAt: 'Пт', avatar },
  { name: 'noName', message:'...', unread: '1', updatedAt: 'Пт', avatar },
  { name: 'noName', message:'...', unread: '1', updatedAt: 'Пт', avatar },
  { name: 'noName', message:'...', unread: '1', updatedAt: 'Пт', avatar },
];

export enum EPages {
  LoginPage = 'login',
  RegisterPage = 'register',
  ProfilePage = 'profile-page',
  EditProfilePage = 'edit-profile-page',
  ChangePasswordPage = 'change-password-page',
  MainPage = 'main-page',
  ErrorPage = 'error-page',
}

export enum EFormSelectors {
  LABEL = '.input-field',
  INPUT = '.input',
  INPUTT_TYPE_ERROR = 'input_type_error',
  INPUT_ERROR = '.input-error',
  INPUT_ERROR_ACTIVE = 'input-error_active',
  SUBMIT_BTN = '.button',
  SUBMIT_BTN_INACTIVE = 'button_inactive',
}

export const formSelectors = {
  label: '.input-field',
  input: '.input',
  inputTypeError: 'input_type_error',
  inputError: '.input-error',
  inputErrorActive: 'input-error_active',
  submitBtn: '.button',
  submitBtnInactive: 'button_inactive',
};
