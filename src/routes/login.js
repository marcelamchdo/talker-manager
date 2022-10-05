const express = require('express');
const randomToken = require('../utils/token');

const app = express.Router();

app.post('/', (_req, res) => {
    const token = randomToken();
    return res.status(200).json({ token }); 
});

module.exports = app;