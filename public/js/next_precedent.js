const carousel = document.getElementById("carousel");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
let index = 0;
const totalSlides = carousel.children.length;
let autoScroll;

// Fonction pour mettre à jour la position du carrousel
function updateCarousel() {
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

// Fonction pour faire défiler automatiquement
function startAutoScroll() {
  autoScroll = setInterval(() => {
    index = (index + 1) % totalSlides; // Incrémente l'index et revient à zéro à la fin
    updateCarousel();
  }, 3000); // Défiler toutes les 3 secondes
}

// Démarre l'autodéfilement au chargement de la page
startAutoScroll();

// Arrête l'autodéfilement et le redémarre après 5 secondes d'inactivité
function resetAutoScroll() {
  clearInterval(autoScroll);
  startAutoScroll();
}

// Écouteurs pour les boutons "Next" et "Prev"
nextButton.addEventListener("click", () => {
  clearInterval(autoScroll);
  index = (index + 1) % totalSlides; // Passe au suivant
  updateCarousel();
  resetAutoScroll(); // Redémarre l'autodéfilement
});

prevButton.addEventListener("click", () => {
  clearInterval(autoScroll);
  index = (index - 1 + totalSlides) % totalSlides; // Passe au précédent
  updateCarousel();
  resetAutoScroll(); // Redémarre l'autodéfilement
});
