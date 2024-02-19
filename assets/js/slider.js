const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let index = 0;

function showSlide() {
  // Hide all slides
  slides.forEach(slide => {
    slide.style.display = 'none';
  });

  // Show the slide at the current index
  slides[index].style.display = 'block';
}

function nextSlide() {
  index++;
  if (index >= slides.length) {
    index = 0; // Reset index to loop back to the first slide
  }
  showSlide();
}

function prevSlide() {
  index--;
  if (index < 0) {
    index = slides.length - 1; // Set index to the last slide
  }
  showSlide();
}

// Initially show the first slide
showSlide();

// Add event listeners to the buttons
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);
