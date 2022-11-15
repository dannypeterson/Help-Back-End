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
      Review.belongsTo(models.Restaurant, {
        foreignKey: 'restaurant_id',
        as: 'reviews',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Review.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'reviewer',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Review.init(
    {
      dish: DataTypes.STRING,
      description: DataTypes.STRING,
      rating: DataTypes.INTEGER,
      img: DataTypes.STRING,
      restaurant_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'restaurant_id',
        onDelete: 'CASCADE',
        references: {
          model: 'restaurants',
          key: 'id'
        }
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Review',
      tableName: 'reviews'
    }
  )
  return Review
}
