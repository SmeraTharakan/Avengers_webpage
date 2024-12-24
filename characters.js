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
