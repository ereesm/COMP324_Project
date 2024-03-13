board.addEventListener('DOMContentLoaded', function(){
    console.log('Website Loaded!');
});

document.getElementById('searchForm').addEventListener('submit', function(event){
    event.preventDefault();
    var searchTerm = document.getElementById('searchInput').ariaValueMax;
    console.log('searching for:', searchTerm);
});