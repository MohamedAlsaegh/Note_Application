const router = require('express').Router()
const authCtrl = require('../controllers/authController')

// Routes

router.get('/', authCtrl.auth_signup_get)
router.post('/', authCtrl.auth_signup_post)

router.get('/', authCtrl.auth_signin_get)

module.exports = router
