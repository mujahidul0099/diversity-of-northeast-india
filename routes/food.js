// ./routes/food.js
const express = require('express');
const router = express.Router();

// GET /food - Display overview of food/cuisine
router.get('/', (req, res) => {
    // Later, fetch food/cuisine data
    res.render('food', { title: 'Food of Northeast India' });
});

module.exports = router;