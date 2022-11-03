const { decodedToken } = require('../auth/auth');

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  const decode = decodedToken(token);

  if (!decode) {
    return res.status(401).json({ message: 'Usuário não autorizado' });
  }

  req.user = decode.payload;
  console.log(req.user);
  next();
};

module.exports = { authMiddleware };
