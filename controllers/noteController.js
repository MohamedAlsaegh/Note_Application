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
    res.send(note) //will be EJS page later
  } catch (error) {
    console.error('An error has occurred getting a note!', error.message)
  }
}

const updateNoteById = async (req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.send(note) //will be EJS page later
  } catch (error) {
    console.error('An error has occurred updating a note!', error.message)
  }
}

const deleteNoteById = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id)
  res.send(`Note with ID ${req.params.id} has been deleted successfully!`) //will be EJS page later
  try {
  } catch (error) {
    console.error('An error has occurred deleting a note!', error.message)
  }
}

module.exports = {
  createNote,
  getAllnotes,
  getnoteById,
  updateNoteById,
  deleteNoteById
}
