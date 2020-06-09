module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
        },
        description: {
            type: Sequelize.STRING,
        },
        price: {
            type: Sequelize.DECIMAL(8, 2),
        },
        position: {
            type: Sequelize.INTEGER
        },
        status: {
            type: Sequelize.BOOLEAN
        }
    });

    return Product;
};
