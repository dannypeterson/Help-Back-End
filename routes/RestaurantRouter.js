const router = require('express').Router()
const controller = require('../controllers/RestaurantController')
const middleware = require('../middleware')

router.get('/:restaurant_id', controller.GetRestaurant)
router.get('/', controller.GetAllRestaurants)

module.exports = router
