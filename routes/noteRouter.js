const express = require('express')
const router = express.Router()
const isSignedIn = require('../middleware/is-signed-in')

const noteController = require('../controllers/noteController.js')

//ApI's
router.get('/home', isSignedIn, (req, res) => {
  res.render('notes/home', { user: req.session.user })
})
router.get('/:id/edit', async (req, res) => {
  const note = await Note.findById(req.params.id)
  res.render('notes/edit', { note })
})

router.post('/', noteController.createNote)
router.get('/', noteController.getAllnotes)
router.get('/show', noteController.note_show_get)
router.get('/:id/edit', noteController.noteEdit)
router.get('/:id', noteController.getnoteById)
router.put('/:id', noteController.updateNoteById)
router.delete('/:id', noteController.deleteNoteById)

module.exports = router
