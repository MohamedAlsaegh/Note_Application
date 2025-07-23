const User = require('../models/User.js')
const Note = require('../models/Note.js')

// CREATE note
const notes_create_post = async (req, res) => {
  try {
    req.body.isCompleted = req.body.isCompleted === "on"
    req.body.tag = req.body.tag.trim().toLowerCase()
    
    // Attach current userId if not sent from the form
    if (!req.body.userId && req.session.user) {
      req.body.userId = req.session.user._id
    }

    await Note.create(req.body)
    res.redirect("/notes/show")
  } catch (error) {
    console.error("Create Note Error:", error.message)
    res.redirect("/notes/show")
  }
}

// GET all notes as API
const getAllnotes = async (req, res) => {
  try {
    const notes = await Note.find({})
    res.send(notes)
  } catch (error) {
    console.error("Error fetching notes:", error.message)
    res.status(500).send("Server Error")
  }
}

// GET note by ID as API
const getnoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id)
    res.send(note)
  } catch (error) {
    console.error("Error getting note by ID:", error.message)
    res.status(500).send("Server Error")
  }
}

// UPDATE note by ID
const updateNoteById = async (req, res) => {
  try {
    req.body.isCompleted = !!req.body.isCompleted
    req.body.tag = req.body.tag.trim().toLowerCase()

    await Note.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/notes/show')
  } catch (error) {
    console.error('Update Note Error:', error.message)
    res.redirect('/notes/show')
  }
}

// DELETE note
const deleteNoteById = async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id)
    res.redirect('/notes/show')
  } catch (error) {
    console.error('Delete Note Error:', error.message)
    res.redirect('/notes/show')
  }
}

// SHOW PAGE (Dashboard)
const note_show_get = async (req, res) => {
  try {
    const user = await User.findById(req.session.user._id)
    const allTags = ['work', 'personal', 'urgent', 'projects']

    const taggedNotes = await Promise.all(
      allTags.map(async (tag) => {
        const notes = await Note.find({ tag, userId: user._id })
        return { tag, notes }
      })
    )

    res.render('notes/show', {
      user,
      allTags,
      taggedNotes
    })
  } catch (error) {
    console.error('Error loading dashboard:', error.message)
    res.redirect('/')
  }
}

// EDIT page
const noteEdit = async (req, res) => {
  try {
    const allTags = ['work', 'personal', 'urgent', 'projects']
    const note = await Note.findById(req.params.id)

    if (!note) return res.status(404).send('Note not found')

    res.render('notes/edit', { note, allTags })
  } catch (error) {
    console.error('Error loading edit page:', error.message)
    res.redirect('/notes/show')
  }
}

module.exports = {
  notes_create_post,
  getAllnotes,
  getnoteById,
  updateNoteById,
  deleteNoteById,
  note_show_get,
  noteEdit
}
