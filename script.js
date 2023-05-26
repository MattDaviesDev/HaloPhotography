document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;
  
    function showSlide(n) {
        slides[currentSlide].classList.remove('active');
        slides[currentSlide].classList.add('previous'); // Add 'previous' class to the current slide
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        slides[currentSlide].classList.remove('previous'); // Remove 'previous' class from the new active slide
    }
    
  
    // Auto slideshow
    setInterval(function() {
      showSlide(currentSlide + 1);
    }, 5000);
  });
