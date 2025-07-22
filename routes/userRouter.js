
const express = require('express')
const multer  = require('multer')
const path=require('path')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
   cb(null, path.join(__dirname, '..', 'public/uploads'))
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()} - ${file.originalname}`)
  }
})

const upload = multer({ storage: storage })

const router = express.Router()

const userController = require('../controllers/userController.js')

router.get('/:id', userController.getUserById)
router.put('/:userId', upload.single('image'), userController.updateUserData)

module.exports = router
