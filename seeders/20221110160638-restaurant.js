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
          category: 'American',
          img: 'https://media.foodnetwork.ca/imageserve/wp-content/uploads/sites/6/2015/03/Exterior2-e1425495506573/x.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Atlantic Fish Company',
          address: '761 Boylston St., Boston, MA, 02134',
          category: 'Seafood',
          img: 'https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2018/02/The-Barking-Crab-patio.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Legal Sea Foods',
          address: '255 State St, Boston, MA, 02109',
          category: 'Seafood',
          img: 'https://static.trip101.com/paragraph_media/pictures/002/585/193/large/30189573002_31019b2232_z.jpg?1644602052',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Shaking Crab',
          address: '140 Boylston St, Boston, MA, 02116',
          category: 'Seafood',
          img: 'https://media-cdn.tripadvisor.com/media/photo-s/0d/b3/f4/27/awesome-concept.jpg',
          updatedAt: new Date()
        },
        {
          name: 'Nu Burger',
          address: '401 Park Dr, Boston, MA 02215',
          category: 'American',
          img: 'https://media.foodnetwork.ca/imageserve/wp-content/uploads/sites/6/2015/03/Exterior2-e1425495506573/x.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Nu Burger',
          address: '401 Park Dr, Boston, MA 02215',
          category: 'American',
          img: 'https://media.foodnetwork.ca/imageserve/wp-content/uploads/sites/6/2015/03/Exterior2-e1425495506573/x.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Nu Burger',
          address: '401 Park Dr, Boston, MA 02215',
          category: 'American',
          img: 'https://media.foodnetwork.ca/imageserve/wp-content/uploads/sites/6/2015/03/Exterior2-e1425495506573/x.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('restaurants', null, {})
  }
}
