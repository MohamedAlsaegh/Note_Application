const User = require('../models/User.js') // Import the User model

// GET route to render a user's profile page
const getUserById = async (req, res) => {
  try {
    // Prevent users from viewing another user's profile
    if (req.params.id !== req.session.user._id.toString()) {
      return res.status(403).send('Unauthorized access')
    }

    // Retrieve user data from the database
    const user = await User.findById(req.params.id)

    // If the user does not exist, redirect to the sign-up page
    if (!user) {
      return res.redirect('/auth/sign-up')
    }

    // Select specific profile fields to send to the view
    const userProfileData = {
      _id: user._id,
      username: user.username,
      about: user.about,
      image: user.image
    }

    // Render the profile view with filtered user data
    res.render('users/profile.ejs', { user: userProfileData })
  } catch (error) {
    console.error('Error showing profile:', error.message)
  }
}

// PUT route to update user profile data
const updateUserData = async (req, res) => {
  // If an image file was uploaded, assign its filename to the user's image field
  if (req.file) {
    req.body.image = req.file.filename
  }

  // Update the user's information in the database
  await User.findByIdAndUpdate(req.params.userId, req.body)

  // Redirect back to the updated user profile page

  res.redirect(`/users/${req.params.userId}`)
}

// Export controller functions for use in routes
module.exports = {
  updateUserData,
  getUserById
}
