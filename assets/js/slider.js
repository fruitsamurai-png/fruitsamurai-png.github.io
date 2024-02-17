const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-slide');

let index = 0;

function nextSlide() {
  index++;
  if (index === slides.length) {
    index = 0;
  }
  updateCarousel();
}

function prevSlide() {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  updateCarousel();
}

function updateCarousel() {
  const offset = -index * slides[0].offsetWidth;
  carousel.style.transform = `translateX(${offset}px)`;
}

// Optionally, add event listeners to trigger slide navigation
// For example:
document.querySelector('.next-button').addEventListener('click', nextSlide);
document.querySelector('.prev-button').addEventListener('click', prevSlide);