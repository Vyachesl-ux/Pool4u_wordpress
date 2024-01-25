const modalCall = document.querySelectorAll('.projects-content__item-image--info-description');
const modalClose = document.querySelectorAll('.modal__close');
const modalId = document.querySelectorAll('.modal');
modalCall.forEach(e => {
   e.addEventListener('click', (event) => {
      event.preventDefault();
      let attr = e.getAttribute('data-modal');
      modalId.forEach(i => {
         if (attr === i.getAttribute('id')) {
            i.classList.add('show');
            document.body.classList.add('no-scroll');
         }
         setTimeout(() => {
            i.querySelector('.modal__dialog').style.transform = "rotateX(0)";
         }, 200);
      });

   })
})
modalClose.forEach(e => {
   e.addEventListener('click', (event) => {
      event.preventDefault();
      modalId.forEach(item => {
         item.querySelector('.modal__dialog').style.transform = "rotateX(90deg)";
         if (item.classList.contains('show')) {
            setTimeout(() => {
               item.classList.remove('show');
               document.body.classList.remove('no-scroll');
            }, 200);
         }
      })
   });
})
modalId.forEach(e => {
   e.addEventListener('click', (event) => {
      let str_val = event.target.getAttribute('class');
      if(str_val === 'modal show'){
         e.querySelector('.modal__dialog').style.transform = "rotateX(90deg)";
         document.body.classList.remove('no-scroll');
         setTimeout(() => {
            e.classList.remove('show');
         }, 200);
      }
   })
})