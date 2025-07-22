const User = require('../models/User.js')

const getUserById = async (req, res) => {
  try {
    if (req.params.id !== req.session.user._id.toString()) {
      return res.status(403).send('Unauthorized access')
    }

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

    res.render('users/profile.ejs', { user: userProfileData })
  } catch (error) {
    console.error('Error showing profile:', error.message)
  }
}

const updateUserData = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)

    if (!user) {
      return res.redirect('/auth/sign-up')
    }
    user.username = req.body.username
    user.about = req.body.about

    if (req.file) {
      user.image = req.file.filename
    }

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
