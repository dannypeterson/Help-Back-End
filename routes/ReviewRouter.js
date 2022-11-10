const router = require('express').Router()
const controller = require('../controllers/ReviewController')
const middleware = require('../middleware')

router.get('/review', controller.GetReview)

router.get('/allreviews', controller.GetAllReviews)

router.post(
  '/createreview',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateReview
)
router.put(
  '/update/:review_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateReview
)
router.delete(
  '/delete/:review_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteReview
)

module.exports = router
