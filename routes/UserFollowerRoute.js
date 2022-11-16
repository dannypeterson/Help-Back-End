const router = require('express').Router()
const controller = require('../controllers/UserFollowerController')
const middleware = require('../middleware')

//get all users and followers
router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetUsersAndFollowers
)

module.exports = router
