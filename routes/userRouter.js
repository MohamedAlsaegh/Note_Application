const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController.js')

router.put('/:id', userController.updateUserData)

module.exports = router
