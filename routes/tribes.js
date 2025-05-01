// ./routes/tribes.js
const express = require('express');
const router = express.Router();
const Tribe = require('../models/Tribe'); // Import the Tribe model if you want to fetch data

// GET /tribes - Display list or overview of tribes
router.get('/', async (req, res) => { // Make async if fetching data
    try {
        // Example: Fetching tribes from database (uncomment when ready)
        // const tribes = await Tribe.find().sort({ name: 1 }); // Fetch all tribes, sorted by name
        // res.render('tribes', {
        //     title: 'Tribes of Northeast India',
        //     tribes: tribes // Pass tribes data to the view
        // });

        // --- Current Placeholder ---
        res.render('tribes', { title: 'Tribes of Northeast India' });
        // ---------------------------

    } catch (err) {
        console.error("Error fetching tribes:", err);
        // Render an error page or redirect
        res.status(500).send("Error loading tribe information.");
    }
});

// Example: Route for a specific tribe detail page
// router.get('/:tribeId', async (req, res) => {
//     try {
//         const tribe = await Tribe.findById(req.params.tribeId);
//         if (!tribe) {
//             return res.status(404).send('Tribe not found');
//         }
//         res.render('tribe-detail', { title: tribe.name, tribe: tribe });
//     } catch (err) {
//         console.error("Error fetching tribe:", err);
//         res.status(500).send("Error loading tribe details.");
//     }
// });

module.exports = router;