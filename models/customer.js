'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.transaction,{
        foreignKey: "customer_id",
        as: "transaction customer"
      })
    }
  };
  customer.init({
    customer_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    image: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'customer',
    tableName: "customers"
    
  });
  return customer;
};
