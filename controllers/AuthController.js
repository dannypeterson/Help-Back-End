const { User } = require('../models')
const middleware = require('../middleware')

const Register = async (req, res) => {
  try {
    const { username, email, password } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const user = await User.create({ username, email, passwordDigest })
    res.send(username)
  } catch (error) {
    throw error
  }
}

// const Login = async (req, res) => {
//   try {
//   } catch (error) {
//     throw error
//   }
// }

// const CreateUser = async (req, res) => {
//   try {
//     const { username, email, password } = req.body
//     const user = await User.create({ username, email, password })
//     res.send(user)
//   } catch (error) {
//     console.log(error)
//   }
// }

const FindUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id)
    res.send(user)
  } catch (error) {}
}

const GetAllUsers = async (req, res) => {
  try {
    const user = await User.findAll()
    res.send(user)
  } catch (error) {}
}

module.exports = {
  // CreateUser,
  FindUserById,
  GetAllUsers,
  // Login,
  Register
}


