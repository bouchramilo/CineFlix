
// addFavoris.js

function addToFavorites(title, langue, imageUrl, genre, year, rating) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const film = { title, langue, imageUrl, genre, year, rating };

    // Vérifier si le film est déjà dans les favoris
    if (!favorites.some(fav => fav.title === title)) {
        favorites.push(film);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert('Film ajouté aux favoris !');
    } else {
        alert('Ce film est déjà dans vos favoris.');
    }
}
