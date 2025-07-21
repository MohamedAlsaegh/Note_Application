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
