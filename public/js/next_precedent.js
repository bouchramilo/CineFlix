
const carousel = document.getElementById("carousel");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
let index = 0;
let autoScroll;

// Fonction pour calculer la largeur d'une carte et ajuster la taille du défilement
function calculateCardWidth() {
  const card = carousel.children[0];
  const cardStyle = window.getComputedStyle(card);
  const cardWidth = card.offsetWidth + parseInt(cardStyle.marginLeft) + parseInt(cardStyle.marginRight);
  return cardWidth;
}

// Fonction pour mettre à jour la position du carrousel
function updateCarousel() {
  const cardWidth = calculateCardWidth();
  carousel.style.transform = `translateX(-${index * cardWidth}px)`;
}

// Fonction pour faire défiler automatiquement
function startAutoScroll() {
  autoScroll = setInterval(() => {
    index = (index + 1) % carousel.children.length;
    updateCarousel();
  }, 3000); // Défiler toutes les 3 secondes
}

// Arrête l'autodéfilement et le redémarre après 5 secondes d'inactivité
function resetAutoScroll() {
  clearInterval(autoScroll);
  startAutoScroll();
}

// Écouteurs pour les boutons "Next" et "Prev"
nextButton.addEventListener("click", () => {
  clearInterval(autoScroll);
  index = (index + 1) % carousel.children.length;
  updateCarousel();
  resetAutoScroll();
});

prevButton.addEventListener("click", () => {
  clearInterval(autoScroll);
  index = (index - 1 + carousel.children.length) % carousel.children.length;
  updateCarousel();
  resetAutoScroll();
});

// Ajuster la largeur des cartes au chargement et lors du redimensionnement de la fenêtre
window.addEventListener("load", () => {
  updateCarousel();
  startAutoScroll();
});

window.addEventListener("resize", () => {
  updateCarousel();
});