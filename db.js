const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'your-database-connection-string',
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};