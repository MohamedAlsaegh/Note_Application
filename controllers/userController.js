const User = require('../models/User.js')

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)

    if (!user) {
      return res.redirect('/auth/sign-up')
    }

    const userProfileData = {
      _id: user._id,
      username: user.username,
      about: user.about,
      image: user.image
    }

    res.render('users/profile', { user: userProfileData })
  } catch (error) {
    console.error('Error showing profile:', error.message)
  }
}

const updateUserData = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)

    if (!user) {
      return res.redirect('/auth/sign-up') // Redirect to sign-up if user not found
    }
    user.username = req.body.username
    user.about = req.body.about

    await user.save()
    res.redirect(`/users/${user._id}`)
  } catch (error) {
    console.error('An error occurred updating user data:', error.message)
  }
}

module.exports = {
  updateUserData,
  getUserById
}
