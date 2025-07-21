const express = require('express')
const router = express.Router()

const noteController = require('../controllers/noteController.js')

//ApI's

router.post('/', noteController.createNote)
router.get('/', noteController.getAllnotes)
router.get('/show', noteController.note_show_get)
router.get('/:id/edit', noteController.noteEdit)
router.get('/:id', noteController.getnoteById)
router.put('/:id', noteController.updateNoteById)
router.delete('/:id', noteController.deleteNoteById)

router.get('/:id/edit', async (req, res) => {
  const note = await Note.findById(req.params.id)
  res.render('notes/edit', { note })
})

module.exports = router
