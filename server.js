import express from 'express';
import { engine } from 'express-handlebars';

const app = express();
const PORT = 3000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/components/pages');

app.get('/', (req, res) => {
    console.log('res');
    res.render('main-page');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});