const { decodedToken } = require('../auth/auth');

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(404).json({ message: 'Token não encontrado!' });
  }
  const decode = decodedToken(token.split('Bearer ')[1]);

  if (!decode) {
    return res.status(401).json({ message: 'Usuário não autorizado' });
  }

  req.user = decode.payload;
  next();
};

module.exports = { authMiddleware };
