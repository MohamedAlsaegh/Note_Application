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
if(req.file){
  
  req.body.image=req.file.filename
}
  await User.findByIdAndUpdate(req.params.userId,req.body)
      res.redirect(`/users/${req.params.userId}`)

}

module.exports = {
  updateUserData,
  getUserById
}
