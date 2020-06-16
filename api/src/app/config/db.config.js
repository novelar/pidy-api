module.exports = {
  "username": "root",
  "password": "password",
  "database": "pidydb",
  "host": "127.0.0.1",

  // HOST: "localhost",
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB_SCHEMA,

  // HOST: "us-cdbr-east-05.cleardb.net",
  // USER: "bd3a38e803965f",
  // PASSWORD: "f75a4449",
  // DB: "heroku_9a0d66fe25d1e10",

  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
