// import Swiper bundle with all modules installed
//   import Swiper from 'swiper/bundle';



(() => {
    const play = document.querySelector('.swiper-autoplay-option');
    const protectionOptions = document.querySelectorAll('.protection-description-wrapper');
    
    //Swiper settings

    const swiper = new Swiper(".swiper", {
        // Optional parameters
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                const sunphadeService = ["Sunphade", "No protection", "Screens", "Blinds", ];
                return `<span class=${className}><div>${sunphadeService[index]}</div></span>`;
              },
        },
        effect: "fade",
        on: {
            slideChange: function(){
                let currentSlide = this.slides[this.activeIndex];
                let slideAttribute = currentSlide.getAttribute('data-protection');
                protectionOptions.forEach(option => {
                    if(option.classList.contains(slideAttribute)){
                        option.classList.add('visible');
                       
                    } else {
                        option.classList.remove('visible')
                    }
                })
            }
        }

     });
     //end swiper settiings

     function enableAutoplay(swiper, delay) {
        swiper.params.autoplay = {
          delay: delay,
          disableOnInteraction: false,
        };
        swiper.autoplay.start();
      }

      function disableAutoplay(swiper) {
        swiper.autoplay.stop();
      }
      if(play){
        play.addEventListener('click', ()=>{
            const swiperContainer =document.querySelector('.swiper-wrapper');
            let swiperSlide = document.querySelectorAll('.swiper-slide');
          play.classList.toggle('play');
          play.classList.contains('play') ? enableAutoplay(swiper, 3000) : disableAutoplay(swiper);
        });

      }

        
      
})();
    


