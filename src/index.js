import Handlebars from 'handlebars';
import * as Components from './components/index';
import * as Pages from './pages/index';

const pages = {
  'login': [ Pages.LoginPage ],
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

