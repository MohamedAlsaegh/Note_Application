const router = require('express').Router()
const authCtrl = require('../controllers/authController')
const multer  = require('multer')
const path=require('path')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
   cb(null, path.join(__dirname, '..', 'uploads'))
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()} - ${file.originalname}`)
  }
})

const upload = multer({ storage: storage })


// Routes

router.get('/sign-up', authCtrl.auth_signup_get)
router.post('/sign-up', upload.single('image') , authCtrl.auth_signup_post)

router.get('/sign-in', authCtrl.auth_signin_get)
router.post('/sign-in', authCtrl.auth_signin_post)

router.get(`/sign-out`, authCtrl.auth_signout_get)

module.exports = router
