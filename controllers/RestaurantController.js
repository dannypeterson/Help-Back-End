const { Restaurant } = require('../models')

const GetRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findOneById()
    res.send(restaurant)
  } catch (error) {
    throw error
  }
}

const GetAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll()
    res.send(restaurants)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetRestaurant,
  GetAllRestaurants
}
