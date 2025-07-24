const mongoose = require('mongoose') // Import Mongoose for database connection

// Connect to MongoDB using URI from .env file (for security and flexibility)
mongoose.connect(process.env.MONGODB_URI)

// Log confirmation once the connection is established
mongoose.connection.on('connected', () => {
  console.log('Successfully connected to the database')
})

// Export the mongoose instance for use in other files (like models or controllers)
module.exports = mongoose
