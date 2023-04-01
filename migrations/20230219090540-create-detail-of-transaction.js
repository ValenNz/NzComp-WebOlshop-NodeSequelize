'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('detail_of_transaktion', {
      transaction_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "transactions",
          key: "transaction_id"
        }
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "products",
          key: "product_id"
        }
      },
      qty: {
        type: Sequelize.DOUBLE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('detail_of_transaction');
  }
};
