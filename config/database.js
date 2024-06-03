// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('booklinkdatabase', 'root', '@helloworld8387R57669%4RF@fezf876', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  retry: {
    match: [
      /PROTOCOL_CONNECTION_LOST/,
      /ETIMEDOUT/,
      /EHOSTUNREACH/,
      /ECONNREFUSED/,
      /ER_LOCK_DEADLOCK/
    ],
    max: 5
  },
  logging: console.log
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;

