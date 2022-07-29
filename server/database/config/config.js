require('dotenv').config()

module.exports = {
  development: {
    host: process.env.PGHOST,
    dialect: 'postgres'
  },
  production: {
    host: process.env.PGHOST,
    dialect: 'postgres'
  },
}

// process.env.PGDATABASE,
// process.env.PGUSER,
// process.env.PGPASSWORD,
// {
//   host: process.env.PGHOST,
//   dialect: 'postgres'
// }

// module.exports = {
//   development: {
//     username: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD,
//     database: process.env.MYSQL_DATABASE,
//     host: 'http://localhost:3306',
//     // host: process.env.MYSQL_HOST,
//     dialect: 'mysql',
//   },
//   production: {
//     username: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD,
//     database: process.env.MYSQL_DATABASE,
//     host: 'http://localhost:3306',
//     // host: process.env.MYSQL_HOST,
//     dialect: 'mysql',
//   },
// }
