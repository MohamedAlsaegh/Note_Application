const express = require('express') //Express library
const logger = require('morgan') //Morgan for logging
const methodOverride = require('method-override') // To set up the form
const session = require('express-session') // for authentication
require('dotenv').config() // To access the .env

// Database Configurations
const db = require('./database')

const PORT = process.env.PORT ? process.env.PORT : 3000 //port set up

const app = express()

app.use(logger('dev'))
app.use(express.json()) // Parses incoming requests
app.use(express.urlencoded({ extended: false })) // Parses URL-encoded data
app.use(methodOverride('_method'))
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
)

app.get('/', (req, res) => {
  res.send('Your app is connected . . . ')
})

app.listen(PORT, () => {
  console.log(`Server runs on Port ${PORT}`)
})
