const User = require('../models/User.js')

const updateUserData = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)

    if (!user) {
      return res.redirect('/auth/sign-up') // Redirect to sign-up if user not found
    }

    user.username = req.body.username
    user.about = req.body.about

    await user.save()
    res.redirect(`/auth/profile/${user._id}`)
  } catch (error) {
    console.error('An error occurred updating user data:', error.message)
    res.status(500).send('Something went wrong while updating your profile.')
  }
}

module.exports = {
  updateUserData
}
