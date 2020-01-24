const Knex = require('knex');
const configOptions = require('./../knexfile');

const environment = process.env.NODE_ENV || 'dev';

module.exports = Knex(configOptions[environment])