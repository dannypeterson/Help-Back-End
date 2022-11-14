const router = require('express').Router()
const controller = require('../controllers/AuthController')
const middleware = require('../middleware')

router.post('/login', controller.Login)

router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
)
// router.put(
//   '/updatepassword',
//   middleware.stripToken,
//   middleware.verifyToken,
//   controller.UpdatePassword
// )
router.post('/register', controller.Register)

router.get('/', controller.GetAllUsers)
router.get('/:id', controller.FindUserById)

// router.post('/', controller.CreateUser)

module.exports = router
