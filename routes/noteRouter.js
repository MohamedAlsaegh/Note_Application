const express = require('express')
const router = express.Router()
const noteController = require('../controllers/noteController')

// NOTE: `isSignedIn` is applied globally in server.js

// Dashboard page
router.get('/show', noteController.note_show_get)

// Create new note
router.post('/', noteController.notes_create_post)

// APIs
router.get('/', noteController.getAllnotes)
router.get('/:id', noteController.getnoteById)

// Edit form
router.get('/:id/edit', noteController.noteEdit)

// Update
router.put('/:id', noteController.updateNoteById)

// Delete
router.delete('/:id', noteController.deleteNoteById)

module.exports = router
