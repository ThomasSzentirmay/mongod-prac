const router = require('express').Router();
const {Planet, Like} = require('../models');

// Add like to planet
router.put('/like/:planet_id', async (req, res) => {
    const planet_id = req.params.planet_id;

    const like = await like.create({
        planet: planet_id
    });

    const planet = await Planet.findByIdAndUpdate(planet_id, {
        $push: {
            likes: like._id
        }
    }, {new: true});

    res.json(planet);
});

// Get likes for a planet
router.get('/likes/:planet_id', async (req, res) => {
    const planet = await Planet.findById(req.params.planet_id).populate('likes');

    res.json({
        planet,
        likes: planet.likes.length
    })
});

module.exports = router;