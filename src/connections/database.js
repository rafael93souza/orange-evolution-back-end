// Conexão com banco de dados
const knex = require('knex')({
    client: 'pg',
    connection: process.env.PG_CONNECTION_STRING,
    searchPath: ['knex', 'public'],
});

module.exports = knex;
