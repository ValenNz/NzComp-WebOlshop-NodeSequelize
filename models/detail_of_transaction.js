'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detail_transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.transaction,{
        foreignKey: "transaction_id",
        as: "transaction"
      })
      this.belongsTo(models.product,{
        foreignKey: "product_id",
        as: "product"
      })
    }
  };
  detail_transaksi.init({
    transaction_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    qty: DataTypes.DOUBLE,
    price: DataTypes.DOUBLE,
  }, {
    sequelize,
    modelName: 'detail_of_transaction',
    tableName: "detail_transaction",
  });
  return detail_transaksi;
};
