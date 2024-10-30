document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('#rating span');
    const ratingValue = document.getElementById('rating-value');

    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            // Met à jour la couleur des étoiles sélectionnées
            stars.forEach((s, i) => {
                s.classList.toggle('text-red-800', i <= index);
                s.classList.toggle('text-gray-400', i > index);
            });

            // Met à jour le texte de la note
            ratingValue.textContent = `${index + 1} /5`;
        });
    });
});