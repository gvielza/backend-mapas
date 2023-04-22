const express = require('express')
const User = require('../models/user')

const router = express.Router()

router.post('/', (req, res) => {
  const { name, lastname, email, password, disability } = req.body
  console.log(req.body)
  const newUser = new User({
    name,
    lastname,
    email,
    password,
    disability
  })
  newUser.save()
  try {
    res.status(200).json(newUser)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
