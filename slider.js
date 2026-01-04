document.addEventListener("DOMContentLoaded", function() {
  const slidesContainer = document.querySelector(".slides");
  const slides = document.querySelectorAll(".slides img"); // get all images
  const totalSlides = slides.length;
  let index = 0;

  // Function to show a specific slide
  function showSlide(i) {
    if (i < 0) index = totalSlides - 1; // wrap to last
    else if (i >= totalSlides) index = 0; // wrap to first
    else index = i;

    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  }

  // Auto-swipe every 3 seconds
  let autoSwipe = setInterval(() => {
    showSlide(index + 1);
  }, 3000);

  // Prev button
  const prevBtn = document.querySelector(".prev");
  prevBtn.addEventListener("click", () => {
    showSlide(index - 1);
    resetAutoSwipe();
  });

  // Next button
  const nextBtn = document.querySelector(".next");
  nextBtn.addEventListener("click", () => {
    showSlide(index + 1);
    resetAutoSwipe();
  });

  // Reset auto-swipe after manual click
  function resetAutoSwipe() {
    clearInterval(autoSwipe);
    autoSwipe = setInterval(() => {
      showSlide(index + 1);
    }, 3000);
  }

  // Show first slide initially
  showSlide(index);
});
