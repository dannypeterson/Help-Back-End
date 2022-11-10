const router = require('express').Router()
const controller = require('../controllers/RestaurantController')
const middleware = require('../middleware')

router.get('/', controller.GetRestaurant)
router.get('/restaurants', controller.GetAllRestaurants)

module.exports = router
