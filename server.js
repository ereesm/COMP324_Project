var express = require("express"), http = require("http"), appTest;
var mongoose = require('mongoose');

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://einsteinessibu26:DjXXVuS85oqp1y9R@cluster0.rddjoff.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a model for the 'movies' collection
const Movie = mongoose.model('Movie', new mongoose.Schema({}, { collection: 'movies' }));

// Create an Express application
const app = express();
const path = require('path');

// define path to static dir public 
const publicDir = path.join(__dirname, '/src');

// configure express static middleware 
app.use(express.static(publicDir));


// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
