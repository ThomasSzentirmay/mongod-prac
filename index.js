// Pull in mongod package
const { MongoClient, ObjectId } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Check connection
client.connect().then(async () => {
    console.log('Client connected');

    // Reference the DB and Collection you want to interact with
    const db = client.db('rutgers_db');

    const studentsCollection = db.collection('students');

    // Insert into collection(new student)
    // await studentsCollection.insertOne({
    //     name: 'JD', 
    //     course_type: 'FSF-full-time', 
    //     projects: [{name: 'Cool app', type: 'database-tester'}]
    // });

    // Find all from collection (students)
    const allStudents = await studentsCollection
        .find()
        .limit(3) // how many objects from the collection you want to print out
        .sort({name: 1}) // sort objects in ascending order, and -1 for descending
        .toArray();

    // Find student by projects
    const oneStudent = await studentsCollection.findOne({projects: [{name: 'Cool app', type: 'database-tester'}]});

    // Find student by ID
    const studentId = await studentsCollection.findOne({
        _id: new ObjectId("64c003a004d9de826622d2a9")
    });

    // Remove/Delete a student
    // const deleteStudent = await studentsCollection.deleteMany({
    //     _id: new ObjectId("<object_id>")
    // })

    // Now we console log all students
    console.log(allStudents);
})