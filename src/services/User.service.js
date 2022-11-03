const knex = require('../connections/database');
const bcrypt = require('bcrypt');
const errors = require('../utils/errorsBase');

const create = async (data) => {
  const userExists = await knex('users').where('email', data.email);

  if (userExists.length !== 0) {
    throw errors(409, 'Usuário já cadastrado!');
  }

  const passwrdIncrypted = await bcrypt.hash(data.password, 10);
  const userData = { ...data, password: passwrdIncrypted };
  const user = await knex('users').insert(userData).returning(['id', 'name', 'email']);

  return { success: user };
};

const findAll = async () => {
  const users = await knex('users').select();

  return users;
};

module.exports = {
  create,
  findAll,
};
