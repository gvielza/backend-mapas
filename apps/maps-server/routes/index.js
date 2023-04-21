const { Router } = require('express')
const router = Router()
const userRoute = require('./user.route.js')

router.use('/user', userRoute)

module.exports = router
