'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Review.belongsTo(models.Restaurant, { foreignKey: 'restaurantId' })
      Review.belongsTo(models.User, { foreignKey: 'userId' })
    }
  }
  Review.init(
    {
      dish: DataTypes.STRING,
      description: DataTypes.STRING,
      rating: DataTypes.INTEGER,
      img: DataTypes.STRING,
      restaurantId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Review',
      tableName: 'reviews'
    }
  )
  return Review
}
