require('dotenv').config()

module.exports = {
  development: {
    host: process.env.PGHOST,
    dialect: 'postgres',
  },
  production: {
    host: process.env.PGHOST,
    dialect: 'postgres',
  },
}
