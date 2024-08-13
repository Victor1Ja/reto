const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'litethinking',
    password: 'postgres',
    port: 5432,
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};
