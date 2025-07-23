const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  about: {
    type: String
  },
  image: {
    type: String,
    default: 'default.png'
  }
})

module.exports = mongoose.model('User', userSchema)
