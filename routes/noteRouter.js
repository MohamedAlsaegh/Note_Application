const express = require('express')
const router = express.Router()

const noteController = require('../controllers/noteController.js')

//ApI's

router.post('/', noteController.createNote)
router.get('/', noteController.getAllnotes)

module.exports = router
