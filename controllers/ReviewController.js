const { Review, User } = require('../models')

const GetReview = async (req, res) => {
  try {
    const review = await Review.findByPk(req.params.review_id)
    res.send(review)
  } catch (error) {
    throw error
  }
}

const GetAllReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll()
    res.send(reviews)
  } catch (error) {
    throw error
  }
}

const CreateReview = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let reviewBody = {
      user_id: userId,
      ...req.body
    }
    let review = await Review.create(reviewBody)
    res.send(review)
  } catch (error) {
    throw error
  }
}

const UpdateReview = async (req, res) => {
  try {
    const review = await Review.update(
      { ...req.body },
      { where: { id: req.params.review_id }, returning: true }
    )
    res.send(review)
  } catch (error) {
    throw error
  }
}

const DeleteReview = async (req, res) => {
  try {
    await Review.destroy({ where: { id: req.params.review_id } })
    res.send({
      msg: 'Review has been Deleted!',
      // payload: req.params.review_id,
      status: 'OK!'
    })
  } catch (error) {
    throw error
  }
}

const getUserReviews = async (req, res) => {
  try {
    const userAndReviews = await User.findByPk(req.params.user_id, {
      include: [{ model: Review, as: 'reviews' }]
    })
    res.send(userAndReviews)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetReview,
  GetAllReviews,
  CreateReview,
  UpdateReview,
  DeleteReview,
  getUserReviews
}
