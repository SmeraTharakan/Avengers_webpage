
const images = ["assets/av1.jpg", "assets/av2.jpg","assets/av3.jpg","assets/av4.jpg"];
let currentIndex = 0;

function changeImage() {
    const imageElement = document.getElementById("avengersImage");
    currentIndex = (currentIndex + 1) % images.length; 
    imageElement.src = images[currentIndex];
}

setInterval(changeImage, 2000);

const nav = document.querySelector('.nav-container');

let isScrolled = false;

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;

    if (scrollTop > 0) {
        isScrolled = true;
        nav.style.transform = 'translateY(-100%)'; 
    } else {
        isScrolled = false;
        nav.style.transform = 'translateY(0)'; 
    }
});

document.addEventListener('mousemove', (e) => {
    if (isScrolled && e.clientY < 100) {
        nav.style.transform = 'translateY(0)'; 
    } else if (isScrolled) {
        nav.style.transform = 'translateY(-100%)';
    }
});
