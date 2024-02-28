const sliderContainer = document.querySelector('.slider-container');
const images = sliderContainer.querySelectorAll('img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentSlideIndex = 0;

function showSlide(index) {
  images.forEach((image, i) => {
    image.style.display = 'none'; // Hide all images
    if (i === index) {
      image.style.display = 'block'; // Show only the active image
    }
  });
}

function nextSlide() {
  currentSlideIndex++;
  if (currentSlideIndex >= images.length) {
    currentSlideIndex = 0;
  }
  showSlide(currentSlideIndex);
}

function prevSlide() {
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
    currentSlideIndex = images.length - 1;
  }
  showSlide(currentSlideIndex);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

//create a image and a button the image would be of aryabath and the button name will be table / factotrail 
// when ever you care applying add event listner onthe button the image of aryabath will dissapear at the plaace table is dispalyed and when you clicked table will be dissapered an dfactorial will be displayed
