// Pull in mongod package
const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Check connection
client.connect().then(() => {
    console.log('Client connected');
})