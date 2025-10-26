let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    dots[i].classList.remove('active');
  });
  slides[index].classList.add('active');
  dots[index].classList.add('active');
}

document.querySelector('.next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

document.querySelector('.prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    currentIndex = i;
    showSlide(currentIndex);
  });
});

// Auto Slide every 4 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 4000);
