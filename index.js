// // server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors'); // Import the cors package
// const app = express();
// const port = 8080;

// // Use cors middleware
// app.use(cors({
//     origin: 'http://localhost:8080' // Allow requests from this origin
//   }));
  
// // Connect to MongoDB
// mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(err => console.error('Error connecting to MongoDB:', err));

// const dataSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     message: String
// });
// const Data = mongoose.model('Data', dataSchema);

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.post('/api/data', async (req, res) => {
//     try {
//         const { name, email, message } = req.body;
//         const newData = new Data({ name, email, message });
//         await newData.save();
//         const allData = await Data.find();
//         res.json(allData);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// app.get('/api/data', async (req, res) => {
//     try {
//         const allData = await Data.find();
//         res.json(allData);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });



// const express = require('express');
// const app = express();
// const cors = require('cors');
// const PORT = 3000;
// const { MongoClient } = require('mongodb');

// // Middleware
// app.use(cors());
// app.use(express.json()); // Middleware for parsing JSON body

// // Connect to MongoDB
// const url = 'mongodb://localhost:27017';
// mongodb+srv://iyobmw_mw:iyobmw123@cluster0.ay6thjo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// const dbName = 'f1';

// MongoClient.connect(url, { useUnifiedTopology: true }, function(err, client) {
//     if (err) {
//         console.error('Failed to connect to MongoDB:', err);
//         return;
//     }
//     console.log('Connected successfully to MongoDB');
    
//     const db = client.db(dbName);
//     const collection = db.collection('frest1');

//     // Define routes
//     app.get('/', (req, res) => {
//         res.sendFile(__dirname + '/index.html');
//     });

//     // API endpoint for fetching data
//     app.get('/api/data', (req, res) => {
//         // Example: Fetch data from a MongoDB collection
//         collection.find({}).toArray(function(err, docs) {
//             if (err) {
//                 console.error('Error fetching documents:', err);
//                 res.status(500).json({ error: 'Failed to fetch data' });
//                 return;
//             }
//             res.json(docs);
//         });
//     });
//     // API endpoint for fetching data
// app.get('/api/data', (req, res) => {
//     // Example: Fetch data from a MongoDB collection
//     collection.find({}).toArray(function(err, docs) {
//         if (err) {
//             console.error('Error fetching documents:', err);
//             res.status(500).json({ error: 'Failed to fetch data' });
//             return;
//         }
//         res.json(docs); // Send the fetched data to the frontend
//     });
// });


//     // API endpoint for saving data
//     app.post('/api/saveData', (req, res) => {
//         const { name, email, message } = req.body; // Assuming data is sent in the request body

//         // Insert data into MongoDB collection
//         collection.insertOne({ name, email, message }, (err, result) => {
//             if (err) {
//                 console.error('Error saving data:', err);
//                 res.status(500).json({ error: 'Failed to save data' });
//                 return;
//             }
//             console.log('Data saved successfully:', result);
//             res.status(200).json({ message: 'Data saved successfully' });
//         });
//     });

//     // Start the server
//     app.listen(PORT, () => {
//         console.log(`Server is running on port ${PORT}`);
//     });
// });



// server.js

const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;
const { MongoClient } = require('mongodb');

// Middleware
app.use(cors());
app.use(express.json()); // Middleware for parsing JSON body

// Connect to MongoDB
const url = 'mongodb+srv://eyobmulusew:iyobmw123@cluster0.xdtqvnx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const dbName = 'f1';

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, client) {
    if (err) {
        console.error('Failed to connect to MongoDB:', err);
        return;
    }
    console.log('Connected successfully to MongoDB');
    
    const db = client.db(dbName);
    const collection = db.collection('frest1');

    // Define routes
    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html');
    });

    // API endpoint for fetching data
    app.get('/api/data', (req, res) => {
        collection.find({}).toArray(function(err, docs) {
            if (err) {
                console.error('Error fetching documents:', err);
                res.status(500).json({ error: 'Failed to fetch data' });
                return;
            }
            res.json(docs);
        });
    });

    // API endpoint for saving data
    app.post('/api/saveData', (req, res) => {
        const { name, email, message } = req.body;

        collection.insertOne({ name, email, message }, (err, result) => {
            if (err) {
                console.error('Error saving data:', err);
                res.status(500).json({ message: 'Failed to save data' }); // Send error message
                return;
            }
            console.log('Data saved successfully:', result);
            res.status(200).json({ message: 'Data saved successfully' }); // Send success message
        });
    });

    // Start the server
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
