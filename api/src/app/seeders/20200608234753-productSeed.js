'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [
      {
        name: 'Iphone X',
        description: 'A large phone with one of the best screens',
        price: 4999.99,
        position: 1,
        status: true,
        categoryId: 1,
        imageId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Iphone XS',
        description: 'A great phone with one of the best cameras',
        price: 3999.99,
        position: 2,
        status: true,
        categoryId: 1,
        imageId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Samsung S10',
        description: 'A standard phone',
        price: 2999.99,
        position: 1,
        status: true,
        categoryId: 2,
        imageId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  }
};
