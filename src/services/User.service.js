const knex = require('../connections/database');
const bcrypt = require('bcrypt');
const errors = require('../utils/errorsBase');
const { generationToken } = require('../auth/auth');

const create = async (data) => {
  const userExists = await knex('usuarios').where('email', data.email);

  if (userExists.length !== 0) {
    throw errors(409, 'Usuário já cadastrado!');
  }

  const passwrdIncrypted = await bcrypt.hash(data.senha, 10);
  const userData = { ...data, senha: passwrdIncrypted };
  const user = await knex('usuarios').insert(userData).returning(['id', 'nome', 'email']);

  const payload = { id: user[0].id, nome: user[0].nome, email: user[0].email };
  token = generationToken(payload);

  return { user: user[0], token };
};

const findAll = async () => {
  const users = await knex('usuarios').select('id', 'nome', 'email');

  return users;
};

module.exports = {
  create,
  findAll,
};
