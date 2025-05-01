// ./routes/dresses.js
const express = require('express');
const router = express.Router();

// GET /dresses - Display overview of traditional dresses
router.get('/', (req, res) => {
    // Later, fetch dress data
    res.render('dresses', { title: 'Traditional Dresses of Northeast India' });
});

module.exports = router;