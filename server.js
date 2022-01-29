// Require Dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const homesController = require('./controllers/homes');
// const methodOverride = require('method-override');

// Initialize app
const app = express();

// Configure Settings
require('dotenv').config();

// Connect to and Configure MongoDB
mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

// Set up MongoDB Evet Listeners
db.on('connected', () => console.log('Connected to MongoDB'));
db.on('err', () => console.log('MongoDB Error: ' + err.message));

// Mount Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 
// app.use(methodOverride('_method'));
app.use(express.static('public'));


// Mount Routes
app.use('/homes', homesController);


// Tell App to Listen
const PORT = process.env.PORT 

app.listen(PORT, () => {
    console.log('Express is listening on port: ' + PORT);
});