const express = require('express');
const { readTalkersData } = require('../utils/readTalkerFile.js');

const app = express.Router();

app.get('/', async (_req, res) => {
   const talkers = await readTalkersData();
   return res.status(200).json(talkers);
});

app.get('/:id', async (req, res) => {
   const { id } = req.params;
   const talkers = await readTalkersData();
   const findIdTalker = talkers.find((talker) => talker.id === +id);
   if (findIdTalker) {
      return res.status(200).json(findIdTalker);
   }
   return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
});

module.exports = app;
