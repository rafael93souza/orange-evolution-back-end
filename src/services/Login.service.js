const knex = require('../connections/database');
const bcrypt = require('bcrypt');
const { generationToken } = require('../auth/auth');
const errors = require('../utils/errorsBase');

const signIn = async (data) => {
  const { email, senha } = data;
  const user = await knex('usuarios').where('email', email).first();

  if (!user) {
    throw errors(403, 'Usuário e/ou senha inválido(s)!');
  }
  const encrypted = await bcrypt.compare(senha, user.senha);
  if (!encrypted) {
    throw errors(403, 'Usuário e/ou senha inválido(s)!');
  }
  const payload = { id: user.id, nome: user.nome, email: user.email };
  token = generationToken(payload);
  return { token };
};

module.exports = {
  signIn,
};
