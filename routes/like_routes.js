const router = require('express').Router();
const {Planet, Like} = require('../models');

// Add like to planet
router.put('/like/:planet_id', async (req, res) => {
    
});

module.exports = router;