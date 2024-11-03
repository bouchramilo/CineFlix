let searchInput = document.getElementById("search");
let movieList = document.getElementById("carousel");

searchInput.addEventListener("keyup", () => {
    let query = searchInput.value.toLowerCase();
    
    Array.from(movieList.children).forEach(movie => {
        let titleElement = movie.querySelector('h3'); 
        if (titleElement) {
            let title = titleElement.textContent.toLowerCase();
            movie.style.display = title.includes(query) ? "" : "none";
        }
    });
});
