import avatar from '../../static/images/captain-jack-sparrow.jpg';
import image from '../../static/images/image(1).png';

export const PASSWORD_PATTERN = '(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,40}';
export const EMAIL_PATTERN = "[a-z0-9._%+\\-]+@[a-z0-9.\\-]+\\.[a-z]{2,4}";
// pass '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}'
// mobile pattern '/^((\\+7|7|8)+([0-9]){10})$/g'
// email '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}'

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

export const messageData = [
  {
    date: '29 Сентября',
    data: [
      {
        owner: '',
        sentedAt: '11:56',
        message: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. \n Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
        media: '',
        file: '',
      },
      {
        owner: '',
        sentedAt: '11:57',
        message: '',
        media: image,
        file: '',
      },
      {
        owner: 'user',
        sentedAt: '12:00',
        message: 'Круто!',
        file: '',
        viewed: true,
      }
    ],
  }
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
