const User = require('../models/User.js') // User model for authentication & profile
const Note = require('../models/Note.js') // Note model for CRUD operations

//  GET route to show notes page (though it's currently showing 'notes/show.ejs')
const notes_create_get = async (req, res) => {
  res.render('notes/show.ejs') // Might be better renamed for clarity later
}

//  POST route to create a new note
const notes_create_post = async (req, res) => {
  try {
    // Convert checkbox value to true/false
    req.body.isCompleted = req.body.isCompleted === 'on'

    // Securely associate the note with the logged-in user
    req.body.userId = req.session.user._id

    // Save note to the database
    await Note.create(req.body)

    // Redirect to notes listing
    res.redirect('/notes/show')
  } catch (error) {
    console.error('Error creating note:', error.message)
  }
}

//  GET all notes (used for testing or admin purposes)
const getAllnotes = async (req, res) => {
  try {
    const note = await Note.find({})
    res.send(note) // Sends back all notes (not filtered)
  } catch (error) {
    console.error('Error fetching notes:', error.message)
  }
}

//  GET a single note by ID (API route)
const getnoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id)
    console.log(note)
    res.send(note)
  } catch (error) {
    console.error('An error has occurred getting a note!', error.message)
  }
}

//  PUT route to update a specific note
const updateNoteById = async (req, res) => {
  try {
    // Normalize checkbox value
    req.body.isCompleted = req.body.isCompleted === 'on'

    // Update the note document
    await Note.findByIdAndUpdate(req.params.id, req.body, { new: true })

    // Redirect after updating
    res.redirect('/notes/show')
  } catch (error) {
    console.error('Note update error:', error.message)
  }
}

// DELETE a note by ID
const deleteNoteById = async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id)
    res.redirect('/notes/show')
  } catch (error) {
    console.error('An error has occurred deleting a note!', error.message)
  }
}

// GET route for notes/show page — displays user's tagged notes
const note_show_get = async (req, res) => {
  try {
    // Redirect to sign-in if user is not authenticated
    if (!req.session.user) {
      return res.redirect('/auth/sign-in')
    }

    // Fetch current user data
    const user = await User.findById(req.session.user._id)

    // Define tag categories
    const allTags = ['work', 'personal', 'urgent', 'projects']

    // Fetch only notes that match the current user's ID and each tag
    const taggedNotes = await Promise.all(
      allTags.map(async (tag) => {
        const notes = await Note.find({
          tag,
          userId: req.session.user._id // Ensures isolation per user
        })
        return { tag, notes } // Grouped result
      })
    )

    // Render view with filtered notes
    res.render('notes/show', {
      user,
      allTags,
      taggedNotes
    })
  } catch (error) {
    console.error('Error loading show page:', error.message)
  }
}

//  GET route for editing a note
const noteEdit = async (req, res) => {
  try {
    const allTags = ['work', 'personal', 'urgent', 'projects']

    // Find the note by ID
    const note = await Note.findById(req.params.id)
    if (!note) return res.status(404).send('Note not found')

    // Pass note and tags to the edit page
    res.render('notes/edit', { note, allTags })
  } catch (error) {
    console.error('Error loading edit page:', error.message)
  }
}

// 🚀 Export all controller functions
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
