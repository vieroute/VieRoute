// script.js

// Visitor Counter Logic
const startingCount = 248;

// Check if 'visitCount' exists in localStorage
if (localStorage.getItem('visitCount')) {
    // Increment the visit count
    let count = parseInt(localStorage.getItem('visitCount')) + 1;
    localStorage.setItem('visitCount', count);
} else {
    // Set 'visitCount' to the starting count if it doesn't exist
    localStorage.setItem('visitCount', startingCount);
}

// Update the visit count on the page
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('visit-count').innerText = localStorage.getItem('visitCount');
});

let currentImageIndex = 0;
const images = [
    'picture-vie/fisherman1.jpg',
    'picture-vie/rice-fields1.jpg',
    'picture-vie/girl1.jpg',
    'picture-vie/wicker-baskets1.jpg',
    'picture-vie/female1.jpg',
];

const texts = [
    'Từ Trà Cổ rừng dương, đến Cà Mau rừng đước...', // Only this text will be displayed
    '',
    '',
    '',
    ''
];

const originalLogo = 'picture-vie/logo-original.png';
const scrolledLogo = 'picture-vie/logoimg.png';

function changeImage(index) {
    currentImageIndex = index;
    updateBackground();
    updateDots();
}

function updateBackground() {
    const backgroundImage = document.getElementById('backgroundImage');
    const textOverlay = document.getElementById('textOverlay');
    backgroundImage.style.backgroundImage = `url('${images[currentImageIndex]}')`;
    textOverlay.innerHTML = texts[currentImageIndex];
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentImageIndex) {
            dot.classList.add('active');
        }
    });
}

// Automatic image rotation
function autoChangeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateBackground();
    updateDots();
}

// Initialize the first image
updateBackground();
updateDots();

// Start automatic rotation every 5 seconds
setInterval(autoChangeImage, 7000);

// Function to change navbar style on scroll
function onScroll() {
    const navbar = document.querySelector('.navbar');
    const logo = document.querySelector('.logo img');
    const backgroundHeight = document.querySelector('.background-image').clientHeight;

    if (window.scrollY > backgroundHeight) {
        navbar.classList.add('scrolled');
        logo.src = scrolledLogo;

    } else {
        navbar.classList.remove('scrolled');
        logo.src = originalLogo;
    }
}

// Attach scroll event listener
window.addEventListener('scroll', onScroll);

