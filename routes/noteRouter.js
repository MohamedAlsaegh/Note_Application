const express = require('express')
const router = express.Router() // Create an instance of the Express router

const isSignedIn = require('../middleware/is-signed-in') // Middleware to protect private routes

const noteController = require('../controllers/noteController.js') // Import all note-related controller functions

// --------- Note Routes ---------

// GET: Render notes page with tagged notes for the logged-in user
router.get('/show', noteController.note_show_get)

// POST: Create a new note
router.post('/', noteController.notes_create_post)

// GET: Fetch all notes (useful for API testing or admin view)
router.get('/', noteController.getAllnotes)

// GET: Render note edit page for specific note
router.get('/:id/edit', noteController.noteEdit)

// GET: Fetch a single note by its ID (API)
router.get('/:id', noteController.getnoteById)

// PUT: Update a specific note by ID
router.put('/:id', noteController.updateNoteById)

// DELETE: Delete a specific note by ID
router.delete('/:id', noteController.deleteNoteById)

// Export router to be used in server setup
module.exports = router
