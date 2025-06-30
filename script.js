// 轮播图功能
const slides = document.querySelectorAll('.slide');
const prevBtn = document.createElement('button');
const nextBtn = document.createElement('button');
let currentSlide = 0;

// 创建左右按钮
prevBtn.innerHTML = '❮';
nextBtn.innerHTML = '❯';
prevBtn.className = 'slider-btn prev';
nextBtn.className = 'slider-btn next';

document.querySelector('.slider').appendChild(prevBtn);
document.querySelector('.slider').appendChild(nextBtn);

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// 按钮事件监听
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// 自动切换轮播图
let slideInterval = setInterval(nextSlide, 3000);

// 鼠标悬停时暂停自动切换
const slider = document.querySelector('.slider');
slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
slider.addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, 3000);
});

// 初始化显示第一张幻灯片
showSlide(0); 