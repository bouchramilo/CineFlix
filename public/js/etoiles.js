


document.addEventListener('DOMContentLoaded', function () {
    const etoiles = document.querySelectorAll('#rating span');
    const ratingValue = document.getElementById('rating-value');
    const titreFilm = 'film123'; 

    let filmRatings = JSON.parse(localStorage.getItem('filmRatings')) || {};
    if (filmRatings[titreFilm]) {
        const sum = filmRatings[titreFilm].reduce((acc, rating) => acc + rating, 0);
        const moyenne = (sum / filmRatings[titreFilm].length).toFixed(2);
        ratingValue.textContent = `${moyenne} /5`;
    } else {
        ratingValue.textContent = `0 /5`;
    }

    etoiles.forEach((star, index) => {
        star.addEventListener('click', () => {
            // Met à jour la couleur des étoiles sélectionnées
            etoiles.forEach((s, i) => {
                s.classList.toggle('text-red-800', i <= index);
                s.classList.toggle('text-gray-400', i > index);
            });

            // Enregistrer la nouvelle note
            const currentRating = index + 1;
            if (!filmRatings[titreFilm]) {
                filmRatings[titreFilm] = [];
            }
            filmRatings[titreFilm].push(currentRating);

            // Calculer la nouvelle moyenne des notes
            const sum = filmRatings[titreFilm].reduce((acc, rating) => acc + rating, 0);
            const moyenne = (sum / filmRatings[titreFilm].length).toFixed(2);

            // Mettre à jour le texte de la note moyenne
            ratingValue.textContent = `${moyenne} /5`;

            // Stocker la mise à jour dans localStorage
            localStorage.setItem('filmRatings', JSON.stringify(filmRatings));
        });
    });
});
