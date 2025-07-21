const router = require('express').Router()
const authCtrl = require('../controllers/authController')
const express = require('express')
const multer  = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()} - ${file.filename}`)
  }
})

const upload = multer({ storage: storage })
const app = express()

app.post('/profile', upload.single('image'), function (req, res, next) {
    console.log(req.body)
    console.log(req.file)
    return res.redirect('/')
})

// Routes

router.get('/sign-up', authCtrl.auth_signup_get)
router.post('/sign-up', authCtrl.auth_signup_post)

router.get('/sign-in', authCtrl.auth_signin_get)
router.post('/sign-in', authCtrl.auth_signin_post)

router.get(`/sign-out`, authCtrl.auth_signout_get)

module.exports = router
