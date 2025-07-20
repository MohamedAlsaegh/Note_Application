const User = require('../models/User.js')
const Note = require('../models/Note.js')

const createNote = async (req, res) => {
  try {
    const user = await User.findById(req.body.author)
    const note = await Note.create(req.body)
    user.recipes.push(note._id) // shoul bbe open
    user.save()
    res.send(note)
  } catch (error) {
    console.error('An error has occurred creating a note!', error.message)
    res.status(500).json({ error: error.message })
  }
}

const getAllnotes = async (req, res) => {
  try {
    const noetes = await Note.find({})
    res.send(notes)
  } catch (error) {
    console.error('Error fetching notes:', error.message)
    res.status(500).json({ error: error.message })
  }
}

module.exports = { createNote, getAllnotes }
