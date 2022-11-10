const { User } = require('../models')
const middleware = require('../middleware')

const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body
    const user = await User.create({ username, email, password })
    res.send(user)
  } catch (error) {
    res.status(401).send({ status: 'Error' })
  }
}

module.exports = {
  createUser
}
