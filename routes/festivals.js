// ./routes/festivals.js
const express = require('express');
const router = express.Router();

// GET /festivals - Display list or overview of festivals
router.get('/', (req, res) => {
    // Later, fetch festival data
    res.render('festivals', { title: 'Festivals of Northeast India' });
});

module.exports = router;