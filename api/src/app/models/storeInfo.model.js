module.exports = (sequelize, Sequelize) => {
    const StoresInfo = sequelize.define("storesInfo", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        description: {
            type: Sequelize.STRING
        },
        phoneNumber: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        paymentMethod: {
            type: Sequelize.STRING
        },
        deliveryMode: {
            type: Sequelize.STRING
        },
        shippingCost: {
            type: Sequelize.DECIMAL(8, 2)
        },
        customMessage: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.BOOLEAN
        }
    });

    return StoresInfo;
};
