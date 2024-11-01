let searchInput = document.getElementById("search");
let movieList = document.getElementById("carousel");

// Listen for input events on the search field
searchInput.addEventListener("keyup", () => {
    let query = searchInput.value.toLowerCase();
    
    // Iterate through movie elements within the container
    Array.from(movieList.children).forEach(movie => {
        let titleElement = movie.querySelector('h3'); // Adjust the selector based on your markup structure
        if (titleElement) {
            let title = titleElement.textContent.toLowerCase();
            // Show or hide movie based on match with query
            movie.style.display = title.includes(query) ? "" : "none";
        }
    });
});
