document.addEventListener('DOMContentLoaded', function(){
    console.log('Website Loaded!');
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('Website Loaded!');

    // Check if the element with ID 'searchForm' exists before adding event listener
    var searchForm = document.getElementById('searchForm');
    if (searchForm) {
        // Add event listener to the search form
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Correct the selector to get the value of the search input
            var searchTerm = document.getElementById('searchInput').value;
            console.log('Searching for:', searchTerm);
            // Add your search functionality here
        });
    } else {
        console.error('Element with ID "searchForm" not found.');
    }
});


document.addEventListener('DOMContentLoaded', function() {
    console.log('Website Loaded!');

    // Functionality for movie navigation buttons
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const movieImages = document.querySelector('.movie-images');
    const MOVIE_WIDTH = 225; // Width of each movie image including margin-right

    console.log(prevButton, nextButton, movieImages); // Check if elements are correctly selected

    // Function to move movies to the left
    prevButton.addEventListener('click', function() {
        console.log('Previous button clicked');
        moveMovies(MOVIE_WIDTH); // Move movies to the left by the width of one movie
    });

    // Function to move movies to the right
    nextButton.addEventListener('click', function() {
        console.log('Next button clicked');
        moveMovies(-MOVIE_WIDTH); // Move movies to the right by the width of one movie
    });

    // Function to move movies
    function moveMovies(offset) {
        movieImages.style.transform = `translateX(${offset}px)`;
    }

    // Functionality for search form
    const searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', function(event){
            event.preventDefault();
            var searchTerm = document.getElementById('searchInput').value;
            console.log('Searching for:', searchTerm);
        });
    } else {
        console.log("Search form not found.");
    }
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('Website Loaded!');

    // Function to update top movie display and information
    function updateTopMovie(movieSrc, title, director, actors, description) {
        document.getElementById('top-movie').src = movieSrc;
        document.getElementById('top-movie-title').textContent = title;
        document.getElementById('top-movie-director').textContent = director;
        document.getElementById('top-movie-actors').textContent = actors;
        document.getElementById('top-movie-description').textContent = description;
    }

    // Get references to movie images
    const movie1 = document.getElementById('movie1');
    const movie2 = document.getElementById('movie2');
    const movie3 = document.getElementById('movie3');
    const movie4 = document.getElementById('movie4');
    const movie5 = document.getElementById('movie5');
    const movie6 = document.getElementById('movie6');
    const movie7 = document.getElementById('movie7');
    const movie8 = document.getElementById('movie8');

    // Add event listeners to movie images
    movie1.addEventListener('click', function(click) {
        updateTopMovie(
            'birdCage.jpg',
            'The Birdcage',
            'Movie 1 Director',
            'Robin Williams, Nathan Lane, Actor 3',
            'Description of The Birdcage movie'
        );
    });
    movie2.addEventListener('click', function(click) {
        updateTopMovie(
            'dumbAndDumber.jpg',
            'Dumb and Dumber',
            'Movie 2 Director',
            'Actor 1, Actor 2, Actor 3',
            'Description of Dumb and Dumber movie'
        );
    });
    movie3.addEventListener('click', function(click) {
        updateTopMovie(
            'falilv.jpg',
            'Fear and Loathing in Las Vegas',
            'Movie 3 Director',
            'Actor 1, Actor 2, Actor 3',
            'Description of Fear and Loathing in Las Vegas movie'
        );
    });
    movie4.addEventListener('click', function(click) {
        updateTopMovie(
            'potc.jpg',
            'The Pirates of the Caribbean',
            'Movie 4 Director',
            'Actor 1, Actor 2, Actor 3',
            'Description of The Pirates of the Caribbean movie'
        );
    });
    movie5.addEventListener('click', function(click) {
        updateTopMovie(
            'joker.jpg',
            'The Joker',
            'Movie 5 Director',
            'Actor 1, Actor 2, Actor 3',
            'Description of The Joker movie'
        );
    });
    movie6.addEventListener('click', function(click) {
        updateTopMovie(
            'theHangover.jpg',
            'The Hangover',
            'Movie 6 Director',
            'Actor 1, Actor 2, Actor 3',
            'Description of The Hangover movie'
        );
    });
    movie7.addEventListener('click', function(click) {
        updateTopMovie(
            'truemanShow.jpg',
            'The Trueman Show',
            'Movie 7 Director',
            'Actor 1, Actor 2, Actor 3',
            'Description of The Trueman Show movie'
        );
    });
    movie8.addEventListener('click', function(click) {
        updateTopMovie(
            'johnnyEnglish.jpg',
            'Johnny English',
            'Movie 8 Director',
            'Actor 1, Actor 2, Actor 3',
            'Description of Johnny English movie'
        );
    });

    // Trigger the event listener for the first movie upon page load
    movie1.click();
});
