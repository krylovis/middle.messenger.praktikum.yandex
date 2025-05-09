import express from 'express';
import { resolve, dirname } from 'path';
import { engine } from 'express-handlebars';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', 'pages');


app.get('/', (req, res) => {
  res.sendFile(resolve(`${__dirname}/dist/index.html`));
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
