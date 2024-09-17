document.addEventListener("DOMContentLoaded", function () {
    let swiper = new Swiper(".catalog__slider", {
        loop: true,
        spaceBetween: 12,
        slidesPerView: 2,
        navigation: {
            prevEl: '.catalog__btn-prev',
            nextEl: '.catalog__btn-next',
        },
        autoplay: {
            delay: 5000,
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
        } 
    });
});