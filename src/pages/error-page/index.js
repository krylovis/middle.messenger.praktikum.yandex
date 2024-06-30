import Handlebars from 'handlebars';

import './error-page.scss';
export { default as ErrorPage } from './error-page.hbs?raw';

Handlebars.registerHelper('errors', () => ({
    '404': {
      errorNum: '404',
      text: 'Не туда попали',
    },
    '500': {
      errorNum: '500',
      text: 'Мы уже фиксим'
    }
}));
