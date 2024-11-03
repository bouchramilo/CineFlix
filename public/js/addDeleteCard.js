

function removeFromFavorites(title, filmCard) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites = favorites.filter(film => film.title !== title);
    localStorage.setItem('favorites', JSON.stringify(favorites));

    filmCard.remove();
}




document.addEventListener('DOMContentLoaded', () => {
    const favoritesContainer = document.getElementById('favoritesContainer');
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (favorites.length === 0) {
        favoritesContainer.innerHTML = '<p class="text-gray-500">Aucun film ajouté aux favoris.</p>';
    } else {
        favorites.forEach(film => {
            const filmCard = document.createElement('div');
            filmCard.className = "max-w-xs rounded h-[90%] overflow-hidden shadow-lg bg-white hover:border-4 hover:border-red-800";
            filmCard.dataset.title = film.title;
            filmCard.innerHTML = `
                <div class="relative group">
                    <div class="h-4/5 w-full bg-gray-200">
                        <img src="${film.imageUrl}" alt="${film.title}" class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105">
                        <div class="absolute inset-0 bg-gray-800 bg-opacity-75 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <h3 class="absolute top-16 text-white font-bold">${film.title}</h3>
                            <p class="text-white text-center p-1">Langue: ${film.langue}</p>
                            <p class="text-white text-center p-1">Genre: ${film.genre}</p> <!-- Afficher le genre -->
                            <p class="text-white text-center p-1">Année: ${film.year}</p> <!-- Afficher l'année -->
                            <p class="text-white text-center p-1">Note: ${film.rating}</p> <!-- Afficher la note -->
                        </div>
                        <button class="remove-btn absolute bottom-16 right-4 py-2 px-4">
                            <img src="images/icones/corbeille.png" alt="corbeille" class="w-10">
                        </button>
                    </div>
                </div>`;
            favoritesContainer.appendChild(filmCard);
        });

        // Ajout de l'écouteur d'événement pour chaque bouton de suppression
        favoritesContainer.addEventListener('click', (event) => {
            if (event.target.closest('.remove-btn')) {
                const filmCard = event.target.closest('.max-w-xs');
                const title = filmCard.dataset.title;

                removeFromFavorites(title, filmCard);
            }
        });
    }
});
