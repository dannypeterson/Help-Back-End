'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'restaurants',
      [
        {
          name: 'Nu Burger',
          address: '401 Park Dr, Boston, MA 02215',
          category: 'American'
        },
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {}
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('restaurants', null, {})
  }
}
