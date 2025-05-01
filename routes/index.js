const express = require('express');
const router = express.Router();
// Remove direct model require if not used elsewhere in this file
// const ContactMessage = require('../models/ContactMessage');
const Feedback = require('../models/Feedback');
// Import the controllers
const contactController = require('../controllers/contactController');
// You would create and import other controllers similarly
// const feedbackController = require('../controllers/feedbackController');

// Home Page
router.get('/', (req, res) => {
    res.render('index', { title: 'Northeast India Diversity' });
});

// About Page
router.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' });
});

// --- Contact Routes ---
// Use the controller function for GET
router.get('/contact', contactController.getContactForm);
// Use the controller function for POST
router.post('/contact', contactController.submitContactForm);


// --- Feedback Routes (Example - apply the controller pattern) ---
// GET - Show Form (Refactor into feedbackController.js)
router.get('/feedback', (req, res) => {
     res.render('feedback', { title: 'Feedback', feedbackSent: false });
});

// POST - Handle Submission (Refactor into feedbackController.js)
router.post('/feedback', async (req, res) => {
    try {
        const { rating, comment } = req.body;
        const newFeedback = new Feedback({ rating, comment });
        await newFeedback.save();
        res.render('feedback', { title: 'Feedback', feedbackSent: true });
    } catch (err) {
        console.error("Error saving feedback:", err);
        res.render('feedback', { title: 'Feedback', feedbackSent: false, error: 'Failed to submit feedback. Please try again.' });
    }
});

// You would add routes for tribes, states etc. here, likely using their own controllers

module.exports = router;