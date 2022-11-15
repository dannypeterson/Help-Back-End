'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Restaurant.hasMany(models.Review, {
        foreignKey: 'restaurant_id',
        as: 'reviews',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Restaurant.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      category: DataTypes.STRING,
      img: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Restaurant',
      tableName: 'restaurants'
    }
  )
  return Restaurant
}
