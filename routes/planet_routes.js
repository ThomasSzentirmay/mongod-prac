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


// Get single planet
router.get('/planet/:name', async (req,res) => {
    const planet = await Planet.findOne({
        name: {
            $regex: req.params.name,
            $options: 'i'
        }
    });

    if (planet) return res.json(planet);

    res.json({
        message: 'Planet not found'
    });
});

// Planet stats route
router.get('/stats', async (req, res) => {
    const stats = await Planet.aggregate([
        {
            $group: {
                _id: null,
                count: {$sum: 1},
                totalLikes: {
                    $sum: {
                        $size: '$likes'
                    }
                }
            }
        }
    ]);

    res.json(stats);
});



// export our router object
module.exports = router;