// ./server.js

const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const connectDB = require('./config/database'); // Import DB connection function

// --- Route Imports ---
const indexRoutes = require('./routes/index');
const stateRoutes = require('./routes/states');     // Import state routes
const tribeRoutes = require('./routes/tribes');     // Import tribe routes
const festivalRoutes = require('./routes/festivals'); // Import festival routes
const foodRoutes = require('./routes/food');       // Import food routes
const dressRoutes = require('./routes/dresses');    // Import dress routes

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB Database
connectDB();

const app = express();

// --- View Engine Setup ---
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Set the directory for EJS templates

// --- Middleware ---
// Parse JSON request bodies (useful for APIs, less so for standard web forms)
app.use(express.json());
// Parse URL-encoded request bodies (essential for processing HTML form submissions)
app.use(express.urlencoded({ extended: true }));
// Serve static files (CSS, client-side JS, images) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// --- Mount Routers ---
app.use('/', indexRoutes);                // Handles /, /about, /contact, /feedback
app.use('/states', stateRoutes);          // Handles routes starting with /states
app.use('/tribes', tribeRoutes);          // Handles routes starting with /tribes
app.use('/festivals', festivalRoutes);    // Handles routes starting with /festivals
app.use('/food', foodRoutes);             // Handles routes starting with /food
app.use('/dresses', dressRoutes);         // Handles routes starting with /dresses
// Add other top-level routes here if needed

// --- Basic Error Handling Middleware ---
// Catches errors passed via next(err) or thrown in async routes (with newer Express versions)
app.use((err, req, res, next) => {
  console.error("An error occurred:", err.stack || err); // Log the error details
  // Avoid sending detailed errors to the client in production
  res.status(500).render('error', { // Assuming you might create an error.ejs view
      title: 'Server Error',
      message: 'Sorry, something went wrong on our end. Please try again later.'
   });
  // Or a simpler response:
  // res.status(500).send('Something broke!');
});

// --- Not Found Handler (Optional but Recommended) ---
// This should be the LAST route handler
app.use((req, res) => {
    res.status(404).render('not-found', { // Assuming you create a not-found.ejs view
        title: 'Page Not Found',
        url: req.originalUrl
    });
    // Or a simpler response:
    // res.status(404).send("Sorry, can't find that!");
});


// --- Server Startup ---
const PORT = process.env.PORT || 3000; // Use port from .env or default to 3000

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`));