document.addEventListener('DOMContentLoaded', function () {
  const likeButton = document.getElementById('like'); // Bouton "j'aime"
  const likeCountParagraph = document.getElementById('like-count-film123'); // Paragraphe pour afficher le nombre de "j'aime"
  const filmId = 'film123'; 


  let likesData = JSON.parse(localStorage.getItem('filmLikes')) || {};
  if (!likesData[filmId]) {
      likesData[filmId] = 0; 
  }
  likeCountParagraph.textContent = ` ${likesData[filmId]}`; // Afficher le nombre de "j'aime" existant

  // Événement pour le clic sur le bouton "j'aime"
  likeButton.addEventListener('click', function () {
      likesData[filmId]++;
      likeCountParagraph.textContent = ` ${likesData[filmId]}`; 
      localStorage.setItem('filmLikes', JSON.stringify(likesData));
  });
});
