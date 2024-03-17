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
    function updateTopMovie(movieSrc, title, director, actors, description, genre, year, runTime) {
        document.getElementById('top-movie').src = 'assets/' + movieSrc;
        document.getElementById('top-movie-title').textContent = title;
        document.getElementById('top-movie-director').textContent = director;
        document.getElementById('top-movie-actors').textContent = actors;
        document.getElementById('top-movie-description').textContent = description;
        document.getElementById('top-movie-genre').textContent = genre.join(', ');
        document.getElementById('top-movie-year').textContent = year;
        document.getElementById('top-movie-runTime').textContent = runTime;
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
            'Mike Nichols',
            'Robin Williams, Nathan Lane, Gene Hackman, Hank Azaria',
            'A gay cabaret owner and his drag queen companion agree to put up a false straight front so that their son can introduce them to his fiancée\'s right-wing moralistic parents.',
            ['Comedy', 'Drama'],
            '1996',
            '117 m'
        );
    });
    movie2.addEventListener('click', function(click) {
        updateTopMovie(
            'dumbAndDumber.jpg',
            'Dumb and Dumber',
            'Peter Farrelly',
            'Jim Carrey, Jeff Daniels',
            'The cross-country adventures of two good-hearted but incredibly stupid friends.',
            ['Comedy'],
            '1994',
            '107 m'
        );
    });
    movie3.addEventListener('click', function(click) {
        updateTopMovie(
            'falilv.jpg',
            'Fear and Loathing in Las Vegas',
            'Terry Gilliam',
            'Johnny Depp, Benicio Del Toro, Tobey Maguire',
            'An oddball journalist and his psychopathic lawyer travel to Las Vegas for a series of psychedelic escapades.',
            ['Comedy', 'Drama'],
            '1998',
            '118 m'
        );
    });
    movie4.addEventListener('click', function(click) {
        updateTopMovie(
            'potc.jpg',
            'The Pirates of the Caribbean',
            'Gore Verbinski',
            'Johnny Depp, Geoffrey Rush, Orlando Bloom',
            'Blacksmith Will Turner teams up with eccentric pirate "Captain" Jack Sparrow to save his love, the governor\'s daughter, from Jack\'s former pirate allies, who are now undead.',
            ['Action', 'Adventure', 'Fantasy'],
            '2003',
            '143 m'
        );
    });
    movie5.addEventListener('click', function(click) {
        updateTopMovie(
            'joker.jpg',
            'The Joker',
            'Todd Phillips',
            'Joaquin Phoenix, Robert De Niro, Zazie Beetz',
            'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.',
            ['Crime', 'Drama', 'Thriller'],
            '2019',
            '122 m'
        );
    });
    movie6.addEventListener('click', function(click) {
        updateTopMovie(
            'theHangover.jpg',
            'The Hangover',
            'Todd Phillips',
            'Ed Helms, Bradley Cooper, Zach Galifianakis',
            'Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.',
            ['Comedy'],
            '2009',
            '100 m'

        );
    });
    movie7.addEventListener('click', function(click) {
        updateTopMovie(
            'truemanShow.jpg',
            'The Trueman Show',
            'Peter Weir',
            'Jim Carrey, Ed Harris, Laura Linney',
            'An insurance salesman discovers his whole life is actually a reality TV show.',
            ['Comedy', 'Drama', 'Sci-Fi'],
            '1998',
            '103 m'
        );
    });
    movie8.addEventListener('click', function(click) {
        updateTopMovie(
            'johnnyEnglish.jpg',
            'Johnny English',
            'Peter Howitt',
            'Rowan Atkinson, John Malkovich, Natalie Imbruglia',
            'After a sudden attack on MI5, Johnny English, Britain\'s most confident yet unintelligent spy, becomes Britain\'s only spy.',
            ['Action', 'Adventure', 'Comedy'],
            '2003',
            '87 minutes'
        );
    });

    // Trigger the event listener for the first movie upon page load
    movie1.click();
});

document.addEventListener('DOMContentLoaded', function() {
    // Functionality for like button
    const likeButton = document.getElementById('top-movie-like-button');
    likeButton.addEventListener('click', function() {
        // Toggle like button state
        toggleLikeButton(likeButton);

        // Add/remove movie from favorites
        const movieTitle = document.getElementById('top-movie-title').textContent;
        toggleFavorite(movieTitle);
    });
});

function toggleLikeButton(button) {
    button.classList.toggle('liked');
}

function toggleFavorite(movieTitle) {
    // Implement logic to add/remove movie from user's favorites
}

