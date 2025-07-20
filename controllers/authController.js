const User = require('../models/User')
const bcrypt = require('bcrypt')

// API's

exports.auth_signup_get = async (req, res) => {
  res.render('authController/sign-up.ejs')
}

exports.auth_signup_post = async (req, res) => {
  const userInDatabase = await User.findOne({ username: req.body.username })
  if (userInDatabase) {
    return res.send('Username already taken ...')
  }
  if (req.body.password !== req.body.confirmPassword) {
    return res.send('Password must match')
  }
  const hashedPassword = bcrypt.hashSync(req.body.password, 10)
  req.body.password = hashedPassword

  const user = await User.create(req.body)
  res.send(`Thanks for signing up, ${user.username}`)
}

exports.auth_signin_get = async (req, res) => {
  res.render(`authController/sign-in.ejs`)
}
