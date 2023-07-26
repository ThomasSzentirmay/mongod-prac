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

module.exports = router;