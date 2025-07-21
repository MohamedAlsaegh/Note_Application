const express = require('express') //Express library
const logger = require('morgan') //Morgan for logging
const methodOverride = require('method-override') // To set up the form
const session = require('express-session') // for authentication
require('dotenv').config() // To access the .env
const isSignedIn = require('./middleware/is-signed-in')
const authRouter = require('./routes/authRouter.js')
const noteRouter = require('./routes/noteRouter.js')
const userRouter = require('./routes/userRouter.js')
const passUserToView = require('./middleware/pass-user-to-view')

// Database Configurations
const db = require('./database')

const PORT = process.env.PORT ? process.env.PORT : 3000 //port set up

const app = express()
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

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
app.use(passUserToView)

app.use((req, res, next) => {
  res.locals.user = req.session.user
  next()
})

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.use('/auth', authRouter)
app.use('/notes', noteRouter)
app.use('/users', userRouter)

app.listen(PORT, () => {
  console.log(`Server runs on Port ${PORT}`)
})
