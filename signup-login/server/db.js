const { Pool } = require('pg');
const pool = new Pool({
    user: 'myuser2',
    host: 'localhost',
    database: 'pole',
    password: 'mypass',
    port: 5432, // or your PostgreSQL port
  });

module.exports = pool;
