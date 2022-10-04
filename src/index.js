const express = require('express');
const bodyParser = require('body-parser');

const endpoints = require('./endpoints/routes');

const app = express();
app.use(express.json());
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use('/talker', endpoints);
app.use((_req, res) => res.sendStatus(404));

app.listen(PORT, () => {
  console.log('Online');
});