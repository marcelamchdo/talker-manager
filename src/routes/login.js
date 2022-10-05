const express = require('express');
const randomToken = require('../utils/token');

const app = express.Router();

const INVALID_EMAIL = 'O "email" deve ter o formato "email@email.com"';
const INVALID_PASSWORD = 'O "password" deve ter pelo menos 6 caracteres';
const TOKEN = 16;

app.post('/', (req, res) => {
    const { email, password } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'O campo "email" é obrigatório' });
    }
    if (!password) {
        return res.status(400).json({ message: 'O campo "password" é obrigatório' });    
    }
    if (!/[A-z0-9._]+@[a-z]+\.[a-z]{2,3}/.test(email)) {
        return res.status(400).json({ message: INVALID_EMAIL });
    }
    if (password.length < 6) {
        return res.status(400).json({ message: INVALID_PASSWORD });
    }

    const token = randomToken(TOKEN);
    return res.status(200).json({ token }); 
});

module.exports = app;