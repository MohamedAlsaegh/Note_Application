// Importing required dependencies
const express = require('express') // Express for routing and server setup
const logger = require('morgan') // Morgan for HTTP request logging
const methodOverride = require('method-override') // Enables PUT/DELETE in forms using ?_method
const session = require('express-session') // To handle user sessions and authentication
require('dotenv').config() // Loads environment variables from .env file

// Initializing the Express app
const app = express()

// Middleware for access control and data injection
const isSignedIn = require('./middleware/is-signed-in') // Protects private routes
const passUserToView = require('./middleware/pass-user-to-view') // Makes user data available in views

// Custom route modules
const authRouter = require('./routes/authRouter.js')
const noteRouter = require('./routes/noteRouter.js')
const userRouter = require('./routes/userRouter.js')

// Database connection
const db = require('./database')

// Port setup with fallback
const PORT = process.env.PORT ? process.env.PORT : 3000

// View engine and static files setup
const path = require('path')
app.set('view engine', 'ejs') // Use EJS for templating
app.set('views', path.join(__dirname, 'views')) // Set path to view folder
app.use(express.static('public')) // Serve static assets from /public

// Core middleware
app.use(logger('dev')) // Log requests in development-friendly format
app.use(express.json()) // Parse JSON body from API requests
app.use(express.urlencoded({ extended: true })) // Parse form submissions
app.use(methodOverride('_method')) // Enable PUT & DELETE via hidden method field

// Session configuration for authentication
app.use(
  session({
    secret: process.env.SESSION_SECRET, // Secret key from .env
    resave: false, // Avoid unnecessary session saving
    saveUninitialized: true // Create session even if not modified
  })
)

// Middleware to pass session user to all views
app.use(passUserToView)

// Alternative way to inject user data manually (this complements passUserToView)
app.use((req, res, next) => {
  res.locals.user = req.session.user // Make session user available in views
  next()
})

// Homepage route
app.get('/', (req, res) => {
  res.render('index.ejs') // Render home page view
})

// Attach routers to specific paths
app.use('/auth', authRouter) // Authentication routes: sign-in, sign-out, register
app.use('/notes', isSignedIn, noteRouter) // Protected note-related routes
app.use('/users', isSignedIn, userRouter) // Protected user profile and settings routes

// Start the server
app.listen(PORT, () => {
  console.log(`Server runs on Port ${PORT}`) // Console log for confirmation
})
