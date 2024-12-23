// Array of images
const images = ["assets/av1.jpg", "assets/av2.jpg","assets/av3.jpg","assets/av4.jpg"];
let currentIndex = 0;

// Function to change the image
function changeImage() {
    const imageElement = document.getElementById("avengersImage");
    currentIndex = (currentIndex + 1) % images.length; // Cycle through images
    imageElement.src = images[currentIndex];
}

// Change image every 2 seconds
setInterval(changeImage, 2000);
