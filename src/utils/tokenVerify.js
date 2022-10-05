const tokenVerify = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Token não encontrado' });
    }
    if (!/\w{16}/.test(token)) {
        return res.status(401).json({ message: 'Token inválido' });
    }
    next();  
};

module.exports = tokenVerify;