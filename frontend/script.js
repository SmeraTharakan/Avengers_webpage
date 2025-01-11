

const images = ["assets/av1.jpg", "assets/av2.jpg", "assets/av3.jpg", "assets/av4.jpg", "assets/av5.jpg"];
let currentIndex = 0;

const dotsContainer = document.querySelector(".dots-container");
images.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active"); 
    dot.addEventListener("click", () => {
        currentIndex = index;
        updateImageAndDots();
    });
    dotsContainer.appendChild(dot);
});

function updateImageAndDots() {
    const imageElement = document.getElementById("avengersImage");
    const dots = document.querySelectorAll(".dot");

    imageElement.src = images[currentIndex];

    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}

setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImageAndDots();
}, 2000);
