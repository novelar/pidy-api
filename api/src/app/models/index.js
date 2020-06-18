const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.category = require("./category.model.js")(sequelize, Sequelize);
db.image = require("./image.model.js")(sequelize, Sequelize);
db.product = require("./product.model.js")(sequelize, Sequelize);
db.order = require("./order.model.js")(sequelize, Sequelize);
db.orderDetail = require("./orderDetail.model.js")(sequelize, Sequelize);
db.storeInfo = require("./storeInfo.model.js")(sequelize, Sequelize);

db.product.belongsTo(db.category);

db.product.belongsTo(db.image);

db.order.hasMany(db.orderDetail);

db.orderDetail.belongsTo(db.product);

db.category.belongsTo(db.storeInfo);

db.storeInfo.hasMany(db.order);

module.exports = db;
