const NUMBER_MIN = 1;
const NUMBER_MAX = 5;

function verifyTalk(req, res, next) {
  const { talk } = req.body;
  if (!talk) {
    return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
    }
  if (!talk.watchedAt) {
  return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
  }
  if (!talk.rate && talk.rate !== 0) {
    return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
    }
  next();
}

function watchedAtAndRateVerify(req, res, next) {
  const { talk } = req.body;
  if (!/\d{2}\/\d{2}\/\d{4}/.test(talk.watchedAt)) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  if (!(talk.rate >= NUMBER_MIN && talk.rate <= NUMBER_MAX)) {
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }
  if (!talk.rate) {
    return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
    }
  next();
}

module.exports = {
  verifyTalk,
  watchedAtAndRateVerify,
};