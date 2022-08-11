const knexConfigs = require("../../../knexfile");
const knex = require("knex");

const knexConnection = knex(knexConfigs.development);