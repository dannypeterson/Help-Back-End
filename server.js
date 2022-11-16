const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const AuthRouter = require('./routes/AuthRouter')
const ReviewRouter = require('./routes/ReviewRouter')
const RestaurantRouter = require('./routes/RestaurantRouter')
const UserFollowerRouter = require('./routes/UserFollowerRoute')
const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())

app.use('/user', AuthRouter)
app.use('/review', ReviewRouter)
app.use('/restaurants', RestaurantRouter)
app.use('/follower', UserFollowerRouter)

app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`))
