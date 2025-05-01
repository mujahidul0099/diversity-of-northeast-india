// ./config/database.js

const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

// Function to connect to MongoDB
const connectDB = async () => {
    try {
        // Attempt to connect using the URI from the environment variables
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            // Options below are generally defaults in Mongoose 6+ but are good to be aware of.
            // useNewUrlParser: true, // Use the new URL string parser
            // useUnifiedTopology: true // Use the new Server Discovery and Monitoring engine
            // useCreateIndex: true, // Deprecated - Mongoose 6+ handles this automatically
            // useFindAndModify: false // Deprecated - Mongoose 6+ uses findOneAndUpdate() etc. by default
        });

        // Log success message including the host connected to
        console.log(`MongoDB Connected: ${conn.connection.host}`);

    } catch (err) {
        // Log any error that occurs during connection
        console.error(`MongoDB connection error: ${err.message}`);

        // Exit the application process with failure code (1) if connection fails
        // This is important because the app likely can't run without the database.
        process.exit(1);
    }
};

// Export the connectDB function to be used in server.js
module.exports = connectDB;