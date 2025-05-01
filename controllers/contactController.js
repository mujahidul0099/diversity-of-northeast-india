// ./controllers/contactController.js
const ContactMessage = require('../models/ContactMessage');

// Controller function to display the contact form
exports.getContactForm = (req, res) => {
    // Check for status from query param if using redirect method
    // const status = req.query.status;
    // let messageSent = status === 'success';
    res.render('contact', {
        title: 'Contact Us',
        messageSent: false, // Initially false when just displaying form
        error: null
    });
};

// Controller function to handle form submission
exports.submitContactForm = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Basic validation (you might add more robust validation)
        if (!name || !email || !message) {
             return res.render('contact', {
                title: 'Contact Us',
                messageSent: false,
                error: 'All fields are required.'
             });
        }

        const newMessage = new ContactMessage({ name, email, message });
        await newMessage.save();

        // Render the page again, but indicate success
        res.render('contact', {
            title: 'Contact Us',
            messageSent: true // Set to true on success
        });
        // Or redirect: res.redirect('/contact?status=success');

    } catch (err) {
        console.error("Error saving contact message:", err);
        res.render('contact', {
            title: 'Contact Us',
            messageSent: false,
            error: 'Failed to send message due to a server error. Please try again.'
        });
    }
};