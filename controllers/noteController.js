const User = require('../models/User.js')
const Note = require('../models/Note.js')

const notes_create_get = async (req, res) => {
  res.render('notes/show.ejs')
}
const notes_create_post = async (req, res) => {
  if (req.body.isCompleted === 'on') {
    req.body.isCompleted = true
  } else {
    req.body.isCompleted = false
  }
  await Note.create(req.body)
  res.redirect('/notes/show')
}

const getAllnotes = async (req, res) => {
  try {
    const note = await Note.find({})
    res.send(note)
  } catch (error) {
    console.error('Error fetching notes:', error.message)
  }
}

const getnoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id)
    console.log(note)

    res.send(note)
  } catch (error) {
    console.error('An error has occurred getting a note!', error.message)
  }
}

const updateNoteById = async (req, res) => {
  try {
    req.body.isCompleted = !!req.body.isCompleted
    req.body.tag = req.body.tag.trim().toLowerCase()
    await Note.findByIdAndUpdate(req.params.id, req.body, { new: true })

    if (req.body.isCompleted === 'on') {
      req.body.isCompleted = true
    } else {
      req.body.isCompleted = false
    }
    res.redirect('/notes/show')
  } catch (error) {
    console.error('Note update error:', error.message)
  }
}

const deleteNoteById = async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id)
    res.redirect('/notes/show')
  } catch (error) {
    console.error('An error has occurred deleting a note!', error.message)
  }
}

const note_show_get = async (req, res) => {
  try {
    if (!req.session.user) {
      return res.redirect('/auth/sign-in')
    }

    const user = await User.findById(req.session.user._id)
    const allTags = ['work', 'personal', 'urgent', 'projects']

    const taggedNotes = await Promise.all(
      allTags.map(async (tag) => {
        const notes = await Note.find({ tag })
        return { tag, notes }
      })
    )

    res.render('notes/show', {
      user,
      allTags,
      taggedNotes
    })
  } catch (error) {
    console.error('Error loading show page:', error.message)
  }
}

const noteEdit = async (req, res) => {
  try {
    const allTags = ['work', 'personal', 'urgent', 'projects']
    const note = await Note.findById(req.params.id)
    if (!note) return res.status(404).send('Note not found')

    res.render('notes/edit', { note, allTags })
  } catch (error) {
    console.error('Error loading edit page:', error.message)
  }
}

module.exports = {
  notes_create_get,
  notes_create_post,
  getAllnotes,
  getnoteById,
  updateNoteById,
  deleteNoteById,
  note_show_get,
  noteEdit
}
