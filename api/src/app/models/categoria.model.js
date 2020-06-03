module.exports = (sequelize, Sequelize) => {
  const Categoria = sequelize.define("categoria", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.BOOLEAN
    }
  });

  return Categoria;
};
