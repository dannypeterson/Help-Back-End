'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dish: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.INTEGER
      },
      img: {
        type: Sequelize.STRING
      },
      restaurant_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'restaurant_id',
        onDelete: 'CASCADE',
        references: {
          model: 'restaurants',
          key: 'id'
        }
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'user_id',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('reviews')
  }
}
