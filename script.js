let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function () {
    offset +=450;
    if (offset > 1350) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    offset -=450;
    if (offset < 0) {
        offset = 1350;
    }
    sliderLine.style.left = -offset + 'px';
});
