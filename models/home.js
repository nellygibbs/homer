// Require Dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Schema
const homeSchema = new Schema({
    address: String,
    city: String,
    state: String,
    bedrooms: Number,
    bathrooms: Number,
    image: String,
    asking: Number,
    hoa: Boolean,
});

// Export the model to be accessed in server.js
const Home = mongoose.model('Home', homeSchema);
module.exports = Home;