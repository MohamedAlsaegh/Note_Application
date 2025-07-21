const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      required: true
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: false // sould be "true" (it was false just for testing)
    },
    isCompleted: {
      type: Boolean
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Note', noteSchema)
