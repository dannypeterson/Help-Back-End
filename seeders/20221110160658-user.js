'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          username: ,
          email: 'demo@demo.com',
          password: '$321!pass!123$',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: ,
          email: 'demo@demo.com',
          password: '$321!pass!123$',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: ,
          email: 'demo@demo.com',
          password: '$321!pass!123$',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: ,
          email: 'demo@demo.com',
          password: '$321!pass!123$',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: ,
          email: 'demo@demo.com',
          password: '$321!pass!123$',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: ,
          email: 'demo@demo.com',
          password: '$321!pass!123$',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],{}
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
};
