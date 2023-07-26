const db = require('./connection');
const {Planet, Like} = require('../models');
const axios = require('axios');

const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
const planetData = [];


db.once('open', () => {
    console.log('db connected');

    planets.forEach(async (planet, index) => {
        const url = `https://planets-17f2.onrender.com/planets/getPlanet?name=${planet}`;
        const {data} = await axios.get(url);

        planetData.push({
            name: data.name,
            picture: data.picture,
            description: data.description
        });

        if(index === planets.length - 1) {
            console.log(planetData);
        }
    });
});