// Import required modules
const router = require('express').Router() // Create a new Express router instance
const authCtrl = require('../controllers/authController') // Import authentication controller
const multer = require('multer') // Multer handles file uploads (e.g. profile images)
const path = require('path') // Path helps build directory paths safely

// Configure storage for uploaded files
const storage = multer.diskStorage({
  // Set upload destination to /public/uploads
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', 'public/uploads'))
  },
  // Set filename format: timestamp + original filename
  filename: function (req, file, cb) {
    cb(null, `${Date.now()} - ${file.originalname}`)
  }
})

// Create multer instance with the defined storage config
const upload = multer({ storage: storage })

// --------- ROUTES ---------

// GET: Render sign-up form
router.get('/sign-up', authCtrl.auth_signup_get)

// POST: Handle sign-up form submission with optional image upload
router.post('/sign-up', upload.single('image'), authCtrl.auth_signup_post)

// GET: Render sign-in form
router.get('/sign-in', authCtrl.auth_signin_get)

// POST: Handle sign-in form submission
router.post('/sign-in', authCtrl.auth_signin_post)

// GET: Handle user logout
router.get('/sign-out', authCtrl.auth_signout_get)

// Export router to be used in server setup
module.exports = router
