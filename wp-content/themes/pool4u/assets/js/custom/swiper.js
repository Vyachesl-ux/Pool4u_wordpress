// import Swiper bundle with all modules installed
//   import Swiper from 'swiper/bundle';



(() => {
  const swiper = new Swiper(".swiper", {
    loop: true,
    effect: 'creative',
    creativeEffect: {
      prev: {
        translate: [0, 0, -400],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
  });
})();
    


