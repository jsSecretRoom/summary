const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'psql "postgres://default:Nfjzd7ohZ3Wl@ep-weathered-surf-93041641.eu-central-1.postgres.vercel-storage.com:5432/verceldb"',
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
