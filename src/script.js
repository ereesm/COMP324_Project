document.addEventListener('DOMContentLoaded', function(){
    console.log('Website Loaded!');
});



document.addEventListener('DOMContentLoaded', function() {
    // Functionality for navigation buttons
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const movieImages = document.querySelector('.movie-images');
    const MOVIE_WIDTH = 225; // Width of each movie image including margin-right

    // Function to move movies to the left
    prevButton.addEventListener('click', function() {
        moveMovies(MOVIE_WIDTH); // Move movies to the left by the width of one movie
    });

    // Function to move movies to the right
    nextButton.addEventListener('click', function() {
        moveMovies(-MOVIE_WIDTH); // Move movies to the right by the width of one movie
    });

    // Function to move movies
    function moveMovies(offset) {
        // Get current position
        let currentPosition = movieImages.scrollLeft;
        // Calculate new position
        let newPosition = currentPosition + offset;
        // Move to the new position with smooth behavior
        movieImages.scrollTo({
            left: newPosition,
            behavior: 'smooth'
        });
    }
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



// Function to fetch posters and descriptions
function fetchPostersAndDescriptions() {
    fetch('/movies')
        .then(response => response.json())
        .then(data => {
            const movieImagesDiv = document.querySelector('.movie-images');
            
            // Loop through each movie data
            data.forEach((movie, index) => {
                // Create img element for each movie poster
                const img = document.createElement('img');
                img.src = movie.poster;
                img.alt = 'Movie Poster';
                
                // Add click event listener to each poster
                img.addEventListener('click', () => {
                    displayAttributes(movie);
                });
                
                // Append the poster img to movieImagesDiv
                movieImagesDiv.appendChild(img);
                
                // Automatically display attributes of the first movie
                if (index === 0) {
                    displayAttributes(movie);
                }
            });
        })
        .catch(error => console.error('Error fetching posters:', error));
}


function displayAttributes(movie) {
    const attributes = { ...movie };
    const moviePlayerDiv = document.querySelector('.movie-player');
    const movieInfoDiv = document.querySelector('.movie-info');
    const movieDescriptionDiv = document.querySelector('.movie-description');
    const movieTitleDiv = document.querySelector('.movie-title');

    
    moviePlayerDiv.innerHTML = ''; // Clear previous content
    movieInfoDiv.innerHTML = ''; // Clear previous content
    movieDescriptionDiv.innerHTML = ''; // Clear previous content
    movieTitleDiv.innerHTML = ''; // Clear previous content

    // this for loop creates the tags for each movie attributes
    for (let key in attributes) {
        let tag;
        switch (key) {
            case 'title':
                tag = 'h2';
                break;  

            case 'description':
                tag = 'p';
                break;

            case 'genre':
                tag = 'span';
                break;

            case 'released':
                tag = 'span';
                break;

            case 'duration':
                tag = 'span';
                break;

            case 'film_link':
                const videoTag = document.createElement('iframe');
                videoTag.src = attributes[key];
                videoTag.allowFullscreen = true; // Allow fullscreen playback
                videoTag.title = 'YouTube video player';
                videoTag.frameborder = 0; // Remove border
                videoTag.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
                videoTag.referrerpolicy = 'strict-origin-when-cross-origin';
                videoTag.allowFullscreen = true;
                videoTag.id = "movie-player";
                moviePlayerDiv.appendChild(videoTag);
                continue; // Skip appending to attribute list

            default:
                tag = 'p';
                break;
        }


        const attributeItem = document.createElement(tag);
        attributeItem.textContent = `${attributes[key]}`;
        
        // Append attribute id and class to the appropriate property
        if (key === 'title') {
            attributeItem.id = 'top-movie-title';
            movieTitleDiv.appendChild(attributeItem);
        }
        
        if (key === 'description') {
            attributeItem.classList.add('description');
            attributeItem.id = 'top-movie-description';
            movieDescriptionDiv.appendChild(attributeItem);
        }
        
        if (key === 'genre') {
            attributeItem.classList.add('tag');
            attributeItem.id = 'top-movie-genre';
            movieInfoDiv.appendChild(attributeItem);
        }
        
        if (key === 'released') {
            attributeItem.classList.add('tag');
            attributeItem.id = 'top-movie-released';
            movieInfoDiv.appendChild(attributeItem);
        }
        
        if (key === 'duration') {
            attributeItem.classList.add('tag');
            attributeItem.id = 'top-movie-duration';
            movieInfoDiv.appendChild(attributeItem);
        }
    }
}




// Call the fetchPostersAndDescriptions function when the page loads
document.addEventListener('DOMContentLoaded', fetchPostersAndDescriptions);


