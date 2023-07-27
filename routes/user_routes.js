const router = require('express').Router();
const {User} = require('../models');

// Register User
router.post('/register', async (req, res) => {
    try {
        const user = await User.create(req.body);

        res.json(user);
    } catch(err) {
        console.log(err);
        res.status(401).send({
            message: err.message
        });
    }
});

module.exports = router;