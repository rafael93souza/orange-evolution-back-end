const knex = require('../connections/database');

const create = async (data) => {
  const userExists = await knex('users').where('email', data.email);

  if (userExists.length !== 0) {
    throw new Error('Usuário já cadastrado!');
  }

  const user = await knex('users').insert(data).returning(['id', 'name', 'email']);
  console.log(user);
  return { success: 'Ok' };
};

const findAll = async () => {
  const users = await knex('users').select();
  return users;
};

module.exports = {
  create,
  findAll,
};
