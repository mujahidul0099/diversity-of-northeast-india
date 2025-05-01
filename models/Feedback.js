const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    rating: { type: Number, min: 1, max: 5 }, // Optional rating
    comment: { type: String, required: true },
    submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', FeedbackSchema);