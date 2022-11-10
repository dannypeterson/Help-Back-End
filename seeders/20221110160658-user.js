'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          username: 'SeafoodLover',
          email: 'BostonFoodie@boston.com',
          password: '1234',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'Jan3140',
          email: 'JanW@jan.com',
          password: '1234',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'PizzaFiend',
          email: 'pizza4days@pizza.com',
          password: '1234',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'ClassyBites',
          email: 'Alexj@alex.com',
          password: '1234',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'Out2Eat',
          email: 'Dinner@dinner.com',
          password: '1234',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: 'CrabCakeQueen',
          email: 'Queen@crabcakes.com',
          password: '1234',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
}
