const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

client.connect().then(() => {
    console.log('Client connected');
})