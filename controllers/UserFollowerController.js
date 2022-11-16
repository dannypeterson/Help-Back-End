const { User, UserFollower } = require('../models')

const GetUsersAndFollowers = async (res, req) => {
  try {
    const data = await User.findAll({
      include: [{ model: User, as: 'followers', through: { attributes: [] } }]
    })
    res.send(data)
  } catch (error) {
    throw error
  }
}

// const CreateFollower = async (req, res) => {
//   try {
//     let userId = parseInt(req.params.user_id)
//     let reviewBody = {
//       user_id: userId,
//       ...req.body
//     }
//     let review = await Review.create(reviewBody)
//     res.send(review)
//   } catch (error) {
//     throw error
//   }
//}

module.exports = {
  GetUsersAndFollowers
  //CreateFollower
}
