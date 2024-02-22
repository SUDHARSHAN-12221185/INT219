// Get the container element with the class "container"
const container = document.querySelector(".container");

// Get all image elements within the container
const images = container.querySelectorAll("img");

// Get the image element with the class "thumbnail img"
const thumbnail = document.querySelector(".thumbnail img");

// Loop through all the image elements
images.forEach(image => {
  // Add a "click" event listener to each image
  image.addEventListener("click", () => {
    // Update the thumbnail image source with the clicked image's source
    thumbnail.src = image.src;
  });
});
