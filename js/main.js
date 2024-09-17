document.addEventListener("DOMContentLoaded", function () {
    let swiper = new Swiper(".hero__slider", {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 1,
        pagination: {
            el: ".hero__slider-pagination",
            clickable: true
        },
        autoplay: {
            delay: 5000,
        },
    });
    let aboutSwiper = new Swiper(".about__slider", {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 1,
        pagination: {
            el: ".about__slider-pagination",
            clickable: true
        },
        navigation: {
            prevEl: '.about__slider-prev',
            nextEl: '.about__slider-next',
        },
        autoplay: {
            delay: 5000,
        },
    });
    let brandSwiper = new Swiper(".brand__slider", {
        loop: true,
        spaceBetween: 12,
        slidesPerView: 3,
        autoplay: {
            delay: 2500,
        },
        breakpoints: {
            1000: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          } 
    });
});
