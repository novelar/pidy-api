module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define("categories", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING
    },
    position: {
      type: Sequelize.INTEGER
    },
    status: {
      type: Sequelize.BOOLEAN
    }
  });

  return Category;
};
