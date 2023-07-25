// Pull in mongod package
const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Check connection
client.connect().then(() => {
    console.log('Client connected');

    // Reference the DB and Collection you want to interact with
    const db = client.db('rutgers_db');

    const studentsCollection = db.collection('students');

    studentsCollection
    .find()
    .toArray()
    .then(students => {
        console.log(students);
    })
})