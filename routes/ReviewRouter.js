const router = require('express').Router()
const controller = require('../controllers/PostController')
const middleware = require('../middleware')

// router.get('/', controller.GetReviews)
// router.post(
//   '/',
//   middleware.stripToken,
//   middleware.verifyToken,
//   controller.CreateReview
// )
// router.put(
//   '/:post_id',
//   middleware.stripToken,
//   middleware.verifyToken,
//   controller.UpdateReview
// )
// router.delete(
//   '/:post_id',
//   middleware.stripToken,
//   middleware.verifyToken,
//   controller.DeleteReview
// )

module.exports = router
