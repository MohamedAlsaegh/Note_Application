const express = require('express')
const router = express.Router()
const isSignedIn = require('../middleware/is-signed-in')

const noteController = require('../controllers/noteController.js')

//ApI's
router.get('/show',noteController.notes_create_get)

router.post('/', noteController.createNote)
router.get('/', noteController.getAllnotes)

router.get('/show', noteController.note_show_get)
router.get('/:id/edit', noteController.noteEdit)

router.get('/:id', noteController.getnoteById)
router.put('/:id', noteController.updateNoteById)

router.delete('/:id', noteController.deleteNoteById)

module.exports = router
