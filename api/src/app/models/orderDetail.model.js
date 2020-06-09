module.exports = (sequelize, Sequelize) => {
    const OrderDetail = sequelize.define("orderDetails", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        quantity: {
            type: Sequelize.INTEGER
        }
    });

    return OrderDetail;
};