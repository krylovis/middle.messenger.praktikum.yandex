import express from 'express';

const app = express();
const PORT = 3000;
const __dirname = new URL('.', import.meta.url).pathname;

app.use(express.static(`${__dirname}/dist`));

app.get('*', (req, res) => {
  console.log('dist/index.html');
  res.sendFile(`${__dirname}/dist/index.html`);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});