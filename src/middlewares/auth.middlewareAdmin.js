const { decodedToken } = require('../auth/authAdmin');
const knex = require('../connections/database');

const authMiddlewareAdmin = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(404).json({ message: 'Token não encontrado!' });
  }

  const decode = decodedToken(token.split('Bearer ')[1]);
  if (!decode) {
    return res.status(401).json({ message: 'administrador não autorizado' });
  }

  const admin = await knex('administrador').where('email', decode.payload.email).first();
  if (!admin) {
    return res.status(401).json({ message: 'administrador não autorizado' });
  }

  req.admin = decode.payload;

  next();
};

module.exports = { authMiddlewareAdmin };
