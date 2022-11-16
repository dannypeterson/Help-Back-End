'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'restaurants',
      [
        {
          name: 'Atlantic Fish Company',
          address: '761 Boylston St., Boston, MA, 02134',
          category: 'Seafood',
          img: 'https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2018/02/The-Barking-Crab-patio.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'The Salty Pig',
          address: '130 Dartmouth St, Boston, MA, 02116',
          category: 'American',
          img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffastly.4sqi.net%2Fimg%2Fgeneral%2F600x600%2F1084242_0_5I54xsTJq0nP77LgB79Y8NyziUbfOOMwx-OOH74Js.jpg&f=1&nofb=1&ipt=44829f5c0b78deda7c4dc0b4968a0191701bb90e7e690657942fc14327a790dd&ipo=images',
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
          name: 'Legal Sea Foods',
          address: '255 State St, Boston, MA, 02109',
          category: 'Seafood',
          img: 'https://i.pinimg.com/originals/af/fc/ce/affcce027143813525e595cdc4fe9338.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Shaking Crab',
          address: '140 Boylston St, Boston, MA, 02116',
          category: 'Seafood',
          img: 'https://www.westsiderag.com/wp-content/uploads/2017/04/shaking-crab.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Union Oyster House',
          address: '41 Union St, Boston, MA, 02108',
          category: 'Seafood',
          img: 'https://www.massar.org/wp-content/uploads/2019/01/union-oyster-house.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Umami Omaskse',
          address: ' 2372 Massachusetts Ave, Cambridge, MA, 02140',
          category: 'Asian',
          img: 'https://madisonparktimes.com/Images/Images/7806.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: ' Wen’s Yunnan Noodle and Ramen',
          address: '247 Newbury St, Boston, MA 02116',
          category: 'Asian',
          img: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/22/0c/b9/8b/wen-s-noodles.jpg',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Shake Shack',
          address: '234 Newbury St, Boston, MA 02116',
          category: 'FastFood',
          img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fc6%2F58%2F90%2Fc658900c7b5fc9f1f8cc649720954a3a.jpg&f=1&nofb=1&ipt=619e02fe957756c0730495374e882343cf20009f76017acd618a08f4f0f9a042&ipo=images',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Krasi',
          address: '48 Gloucester Street, Boston, MA, 02115',
          category: 'Mediterranean',
          img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frcon.gr%2Fwp-content%2Fuploads%2F2020%2F12%2FRCON_Design_Construction_Krasi_5-640x483.jpg&f=1&nofb=1&ipt=91884105c3308a7991cfd5256c8387d93388cd8c051388335f049b35a5aebe98&ipo=images',
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
