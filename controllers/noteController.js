const User = require('../models/User.js')
const Note = require('../models/Note.js')

const createNote = async (req, res) => {
  try {
    const user = await User.findById(req.body.author)
    const note = await Note.create(req.body)
    user.notes.push(note._id)
    user.save()
    res.send(note) //will be EJS page later
  } catch (error) {
    console.error('An error has occurred creating a note!', error.message)
  }
}

const getAllnotes = async (req, res) => {
  try {
    const note = await Note.find({})
    res.send(note) //will be EJS page later
  } catch (error) {
    console.error('Error fetching notes:', error.message)
  }
}

const getnoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id)
    console.log(note)
    res.render('notes/show.ejs', { user: req.session.user, note })
  } catch (error) {}
}

module.exports = { createNote, getAllnotes, getnoteById }
