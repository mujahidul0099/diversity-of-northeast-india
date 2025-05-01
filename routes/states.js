// ./routes/states.js
const express = require('express');
const router = express.Router();

// GET /states - Display list or overview of states
router.get('/', (req, res) => {
    // Later, you might fetch state data from a database
    res.render('states', { title: 'States of Northeast India' });
});

// Example: Route for a specific state (if you add detail pages)
// router.get('/:stateName', (req, res) => {
//     const stateName = req.params.stateName;
//     // Fetch data for the specific state
//     res.render('state-detail', { title: `About ${stateName}`, stateName: stateName });
// });

module.exports = router;