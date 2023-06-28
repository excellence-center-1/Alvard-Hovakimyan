require('dotenv').config();

module.exports = {
  host: process.env.HOST,
  username: process.env.PSQL_USER,
  password: process.env.PSQL_PASSWORD,
  database: process.env.PSQL_DB,
  dialect: 'postgres',
  timezone: 'Etc/GMT-4',
  minifyAliases: true,
  seederStorage: 'sequelize',
  logging: false,
};