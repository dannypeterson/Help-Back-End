const router = require('express').Router()
const controller = require('../controllers/ReviewController')
const middleware = require('../middleware')

//get review by ID
router.get('/:review_id', controller.GetReview)

//get all reviews
router.get('/', controller.GetAllReviews)

//create review
router.post(
  '/create/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateReview
)

//update review
router.put(
  '/update/:review_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateReview
)

//delete review
router.delete(
  '/delete/:review_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteReview
)

router.get('/test', controller.getUserReviews)

module.exports = router
