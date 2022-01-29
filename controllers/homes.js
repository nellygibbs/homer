// Require Dependencies
const express = require('express');
const Home = require('../models/home');
const homeSeed = require('../models/homeSeed');


// Create Router Object
const homesRouter = express.Router();

// List Router Actions
// Seed Route
homesRouter.get('/seed', async (req,res) => {
    try{ 
        await Home.deleteMany()
        await Home.insertMany(homeSeed)
        console.log('homes added');
        res.status(200).send('homes are added')
    } catch(error) {
        console.log('error')
        res.status(500).send('something went wrong');
    }
});


// Index Route
homesRouter.get('/', async(req,res) => {
    try{
        res.json(await Home.find({}))
    } catch(error) {
        res.status(400).json(error)
    }
});

// Home Create Route
homesRouter.post('/', async(req, res) => {
    try{
        res.json(await Home.create(req.body))
    } catch(error) {
        res.status(400).json(error)
    }
});




module.exports = homesRouter;