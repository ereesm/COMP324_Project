var express = require("express");
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://emile:HaYrQhDETHcl2ak8@cluster0.rddjoff.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });


// Define a model for the 'users' collection
const User = mongoose.model('User', new mongoose.Schema({
    name: String,
    email: String,
    username: String,
    password: String
}, { collection: 'users' }));

//Setup web server by starting and configuring express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('src'));

// Login endpoint
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username, password });
        if (user) {
            res.send('Login successful');
        } else {
            res.status(401).send('Invalid username or password');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

// Signup endpoint
app.post('/signup', async (req, res) => {
    const { name, email, username, password } = req.body;
    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).send('Username already exists');
        }
        const newUser = new User({ name, email, username, password });
        await newUser.save();
        res.redirect('/login.html');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

// Retrieve the existing collection
const Movie = mongoose.connection.useDb('studentboard').model('Movie', new mongoose.Schema({}), 'movies');


// Endpoint to fetch all movie data
app.get('/movies', async (req, res) => {
    try {
        // Retrieve all movies from the 'movies' collection
        const movies = await Movie.find({}, {
            _id: 0,
            description: 1,
            duration: 1,
            genre: 1,
            title: 1,
            released: 1,
            film_link: 1,
            poster: 1
        });

        // Send the movies data as JSON response
        res.json(movies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});





