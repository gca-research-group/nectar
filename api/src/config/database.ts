import '../bootstrap';

module.exports = {
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_bin',
  },
  dialect: process.env.DB_DIALECT || 'postgres',
  timezone: '-03:00',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  logging: process.env.DB_DEBUG === 'true',
  pool: {
    max: 250,
    min: 0,
  },
};
