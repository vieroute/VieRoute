// script.js

let currentImageIndex = 0;
const images = [
    'picture-vie/codohue.jpg',
];

const texts = [
    '', // Only this text will be displayed
    '',
    '',
    '',
    ''
];

const originalLogo = 'picture-vie/logo-original.png';
const scrolledLogo = 'picture-vie/logoimg.png';


function updateBackground() {
    const backgroundImage = document.getElementById('backgroundImage');
    const textOverlay = document.getElementById('textOverlay');
    backgroundImage.style.backgroundImage = `url('${images[currentImageIndex]}')`;
    textOverlay.innerHTML = texts[currentImageIndex];
}

// Initialize the first image
updateBackground();


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

// New code to add HTML content on button click
document.getElementById("moreButton").addEventListener("click", function() {
    const storyHTML = `
        <div class="story">
            <div class="story-container">
                <a href="trada.html">
                    <img src="picture-vie/trada1.jpg" alt="Saigon">
                </a>
                <h3>Tản mạn trà đá Hà Nội - Phần 1</h3>
                <p>Hà Nội là nơi tôn lên văn hoá trà đá nhưng xuất xứ của thức uống bình dị này lại xuất phát từ những tiệm ăn của người Hoa trong miền Nam...</p>
                <p style="color: darkslategray;"><b>Blogs</b> &#183; Tác giả &#183; Châu Anh - Hương Ly - Ngọc Lê</p>
            </div>
            <div class="story-container">
                <a href="trada2.html">
                    <img src="picture-vie/trada2.jpg" alt="Saigon">
                </a>
                <h3>Tản mạn trà đá Hà Nội - Phần 2</h3>
                <p>Trà đá luôn mang trong mình một nét đẹp bình dị. Chỉ cần một chiếc bàn gỗ tự chế, vài chiếc ghế dài hay ghế nhựa đơn sơ, mấy cái cốc thủy tinh, vài bao thuốc lá, hộp kẹo, hộp đựng thuốc lào,... </p>
                <p style="color: darkslategray;"><b>Blogs</b> &#183; Tác giả &#183; Châu Anh - Hương Ly - Ngọc Lê</p>
            </div>
            <div class="story-container">
                <a href="hue.html">
                    <img src="picture-vie/gahue.jpg" alt="Saigon">
                </a>
                <h3>Huế - Chốn bình yên để "chữa lành" tâm hồn còn xanh</h3>
                <p>“Huế buồn lắm", một câu nói muôn thuở của những vị khách từng đi du lịch Huế hay thậm chí cả những người còn chưa đặt chân tới vùng đất này...</p>
                <p style="color: darkslategray;"><b>Blogs</b> &#183; Tác giả &#183; Châu Anh</p>
            </div>
        </div>
        <div class="story">
            <div class="story-container">
                <a href="nhatrang2.html">
                    <img src="picture-vie/festival-nhatrang.jpg" alt="Saigon">
                </a>
                <h3>Nha Trang - Điểm hội tụ của những lễ hội</h3>
                <p>Lễ hội Tháp Bà Ponagar, diễn ra vào tháng 3 âm lịch hàng năm, là một trong những lễ hội lớn nhất của người dân Nha Trang và cũng là Di sản văn hóa phi vật thể Quốc gia...</p>
                <p style="color: darkslategray;"><b>Blogs</b> &#183; Tác giả &#183; Ngọc Lê</p>
            </div>
            <div class="story-container"></div>
            <div class="story-container"></div>
        </div>
    `;

    // Find the existing story part and insert the new content right below it
    const existingStoryPart = document.querySelector('.story');
    existingStoryPart.insertAdjacentHTML('afterend', storyHTML);
});

