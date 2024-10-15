const swiper = new Swiper('.newProducts', {
    loop: true,
    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40
        },
        1280: {
          slidesPerView: 5,
          spaceBetween: 50
        }        
    },
    
/*     navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    } */
});