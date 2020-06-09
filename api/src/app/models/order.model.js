module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("orders", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        billingName: {
            type: Sequelize.STRING
        },
        billingAdress: {
            type: Sequelize.STRING
        },
        totalAmount: {
            type: Sequelize.DECIMAL(8, 2)
        }
    });

    return Order;
};