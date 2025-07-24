const express = require('express')
const multer = require('multer') // Multer handles multipart/form-data (file uploads)
const path = require('path') // Path helps construct cross-platform file paths

// Configure Multer's storage engine
const storage = multer.diskStorage({
  // Set the destination folder for uploaded images
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', 'public/uploads'))
  },
  // Format the filename: timestamp + original name (to avoid collisions)
  filename: function (req, file, cb) {
    cb(null, `${Date.now()} - ${file.originalname}`)
  }
})

// Create Multer upload instance using the above storage config
const upload = multer({ storage: storage })

// Create Express router instance
const router = express.Router()

// Import user controller functions
const userController = require('../controllers/userController.js')

// ----------- ROUTES -----------

// GET: Render the profile page for a specific user
router.get('/:id', userController.getUserById)

// PUT: Update a user's profile data (including image upload)
router.put('/:userId', upload.single('image'), userController.updateUserData)

// Export router to be used in your server.js
module.exports = router
