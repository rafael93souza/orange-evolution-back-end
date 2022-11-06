const knex = require('../connections/database');
const bcrypt = require('bcrypt');
const errors = require('../utils/errorsBase');

const create = async (data) => {
    const userExists = await knex('usuarios').where('email', data.email);

    if (userExists.length !== 0) {
        throw errors(409, 'Usuário já cadastrado!');
    }
    const passwrdIncrypted = await bcrypt.hash(data.senha, 10);
    const userData = { ...data, senha: passwrdIncrypted };
    const user = await knex('usuarios').insert(userData).returning(['id', 'nome', 'email']);

    return { success: user };
};

const findAll = async () => {
    const users = await knex('usuarios').select('id', 'nome', 'email');

    return users;
};
const detailUser = async (id) => {
    console.log(id)
    const users = await knex('usuarios').select(['id', 'nome', 'email']).where({ id });
    return users;
};


module.exports = {
    create,
    findAll,
    detailUser
};
