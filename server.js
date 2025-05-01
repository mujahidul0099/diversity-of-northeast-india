const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const connectDB = require('./config/database'); // Import DB connection function
const indexRoutes = require('./routes/index');
// const stateRoutes = require('./routes/states'); // Import other routes
// const tribeRoutes = require('./routes/tribes'); // Import other routes

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// EJS Setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json()); // To parse JSON bodies (for potential API endpoints)
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded bodies (for form submissions)
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files (CSS, JS, images)

// Routes
app.use('/', indexRoutes);
// app.use('/states', stateRoutes);
// app.use('/tribes', tribeRoutes);
// Add other routes here...

// Basic error handling (optional, can be expanded)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));