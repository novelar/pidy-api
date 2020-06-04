module.exports = {
  // HOST: "localhost",
  // USER: "root",
  // PASSWORD: "password",
  // DB: "pidydb",

  HOST: "us-cdbr-east-05.cleardb.net",
  USER: "bd3a38e803965f",
  PASSWORD: "f75a4449",
  DB: "heroku_9a0d66fe25d1e10",

  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
