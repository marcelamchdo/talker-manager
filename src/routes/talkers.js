const express = require('express');
const { readTalkersData } = require('../utils/readTalkerFile.js');
const writeTalkerFile = require('../utils/writeTalkerFile');
const tokenVerify = require('../utils/tokenVerify');
const talkerVerify = require('../utils/talkerVerify.js');
const { verifyTalk, watchedAtAndRateVerify } = require('../utils/talkVerify.js');
const deleteTalker = require('../utils/deleteFile.js');

const app = express.Router();

app.get('/', async (_req, res) => {
   const talkers = await readTalkersData();
   return res.status(200).json(talkers);
});

app.get('/search', tokenVerify, async (req, res) => {
   const { q } = req.query;
   const talkers = await readTalkersData();
   if (!q) {
     return res.status(200).json(talkers);
   }
   const filterTalker = talkers.filter((talker) => talker.name.includes(q));
   return res.status(200).json(filterTalker);
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

app.delete('/talker/:id', tokenVerify, async (req, res) => {
   const { id } = req.params;
   const newData = await deleteTalker(Number(id));
     return res.status(204).json(newData);
   });

app.use(tokenVerify);

app.post('/', tokenVerify, talkerVerify, verifyTalk, watchedAtAndRateVerify, 
async (req, res) => {
   const newWrite = await writeTalkerFile(req.body);
   return res.status(201).json(newWrite);
});

module.exports = app;
