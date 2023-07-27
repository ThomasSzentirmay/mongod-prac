const express = require('express');

const app = express();
const PORT = process.env.PORT || 3333;

// Import Planet Routes
const planetRoutes = require('./routes/planet_routes.js');
const likeRoutes = require('./routes/like_routes.js');
const userRoutes = require('./routes/user_routes.js');

const db = require('./db/connection');


// Middleware
app.use(express.json());

// Routes
app.use('/api', [planetRoutes, likeRoutes, userRoutes]);


db.once('open', () => {
    app.listen(PORT, () => console.log('Server started on port %s', PORT));
});