const menuicon = document.querySelector('.menubar');
const check = document.querySelector('.check');
const sidebar = document.querySelector('.sidebar');

menuicon.addEventListener('click', () => {
    sidebar.classList.toggle('show'); 
});

check.addEventListener('click', () => {
    sidebar.classList.remove('show'); 
});
const slides = document.querySelectorAll('.slide'); 
let currentSlide = 0; 
const nextButton = document.querySelector('.greater');
const prevButton = document.querySelector('.smaller');


function hideAllSlides() {
  slides.forEach(slide => {
    slide.style.display = 'none';
  });
}

function showSlide(index) {
  hideAllSlides();
  slides[index].style.display = 'block';
}

showSlide(currentSlide);

nextButton.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length; 
  showSlide(currentSlide);
});

prevButton.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length; 
  showSlide(currentSlide);
});


document.addEventListener('DOMContentLoaded', function () {
  let swipercards = new Swiper('.swiper-container', {
    loop: true, // Allows infinite scrolling
    slidesPerView: 3, // Number of slides visible at once
    spaceBetween: 20, // Space between slides in px

    // Enable pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Enable navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Enable scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },

    // Auto-update Swiper when slides are added dynamically
    observer: true,
    observeParents: true,
  });
});

