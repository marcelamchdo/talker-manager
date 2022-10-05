const express = require('express');
const randomToken = require('../utils/token');

const app = express.Router();

const TOKEN = 16;
const regexEmail = /\S+@\S+\.\S+/;

app.post('/', (req, res) => {
    const { email, password } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'O campo "email" é obrigatório' });
    }
    if (!password) {
        return res.status(400).json({ message: 'O campo "password" é obrigatório' });    
    }
    if (!regexEmail.test(email)) {
        return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
    }
    if (password.length < 6) {
        return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
    }

    const token = randomToken(TOKEN);
    return res.status(200).json({ token }); 
});

module.exports = app;