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
        delivery: {
            type: Sequelize.BOOLEAN
        },
        totalAmount: {
            type: Sequelize.DECIMAL(8, 2)
        },
        billable: {
            type: Sequelize.BOOLEAN
        }
    });

    return Order;
};