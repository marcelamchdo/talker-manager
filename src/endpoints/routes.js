const express = require('express');
const { readTalkersData } = require('../utils/fsUtils.js');

const app = express.Router();

app.get('/', async (_req, res) => {
   const talkers = await readTalkersData();
   return res.status(200).json(talkers);
});

module.exports = app;
