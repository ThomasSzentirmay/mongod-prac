const router = require('express').Router();
const {Planet} = require('../models');

// Get all planets
router.get('/planets', async (req,res) => {
    try {
        const planets = await Planet.find({});

        res.json(planets);
    } catch (error) {
        res.status(500).json({ error: 'Unable to fetch planets' });
    }
});

// Create a planet
router.post('/planet', async (req, res) => {

const planet = await Planet.create(req.body);

res.json(planet);

});



// export our router object
module.exports = router;