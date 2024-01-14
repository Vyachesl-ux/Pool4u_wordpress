(() => {
    const caseStudies = new Swiper(".wp-block-case-studies", {
        loop: true,
        spaceBetween: 25,
        slidesPerView: 1.1,
        breakpoints: {
            900: {
                slidesPerView: 1.3,
            }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    })
})()