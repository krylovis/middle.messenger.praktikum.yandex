import Handlebars from 'handlebars';
import avatar from '../../../static/images/captain-jack-sparrow.jpg';

import './main-page.scss';
export { default as MainPage } from './main-page.hbs?raw';


Handlebars.registerHelper('chat-list-helper', () => {
  return [
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
  ]
});