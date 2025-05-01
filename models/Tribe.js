const mongoose = require('mongoose');

const TribeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    state: { // Could be a reference to a State model later
        type: String,
        required: true
    },
    languages: [String], // Array of languages spoken
    description: {
        type: String,
        required: true
    },
    imageUrl: String, // Optional image URL
    // Add other fields as needed (festivals, dress info specific to tribe?)
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Tribe', TribeSchema);