const User = require('../models/User') // Importing the User model
const bcrypt = require('bcrypt') // For password hashing and verification

// GET Sign-Up Page
exports.auth_signup_get = async (req, res) => {
  res.render('./auth/sign-up.ejs') // Render the registration form
}

// POST Sign-Up Form Submission
exports.auth_signup_post = async (req, res) => {
  // Check if username is already taken
  const userInDatabase = await User.findOne({ username: req.body.username })
  if (userInDatabase) {
    return res.send('Username already taken ...') // Prevent duplicate accounts
  }

  // Ensure password and confirmation match
  if (req.body.password !== req.body.confirmPassword) {
    return res.send('Password must match') // Basic form validation
  }

  // Hash the password securely using bcrypt
  const hashedPassword = bcrypt.hashSync(req.body.password, 10)
  req.body.password = hashedPassword // Replace plaintext with hash

  // If a profile image was uploaded, store its filename
  if (req.file) {
    req.body.image = req.file.filename
  }

  // Create the user in the database
  const user = await User.create(req.body)
  res.redirect('/auth/sign-in') // Redirect to login page after successful sign-up
}

//  GET Sign-In Page
exports.auth_signin_get = async (req, res) => {
  res.render('./auth/sign-in.ejs') // Render login form
}

// POST Sign-In Submission
exports.auth_signin_post = async (req, res) => {
  // Find user by username
  const userInDatabase = await User.findOne({ username: req.body.username })
  if (!userInDatabase) {
    return res.send('Login failed. Please try again') // No such user
  }

  // Validate password against hashed one in DB
  const validPassword = bcrypt.compareSync(
    req.body.password,
    userInDatabase.password
  )
  if (!validPassword) {
    return res.send('Login failed. Please try again') // Wrong password
  }

  // Store authenticated user in session
  req.session.user = {
    username: userInDatabase.username,
    _id: userInDatabase._id
  }

  res.redirect('/notes/show') // Redirect to notes page after successful login
}

//  GET Sign-Out Route
exports.auth_signout_get = (req, res) => {
  req.session.destroy() // Destroy session and log the user out
  res.redirect('/auth/sign-in') // Redirect to login page
}
