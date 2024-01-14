(() => {
    let currentIndex = 3;
    const caseItems = document.querySelectorAll('.case-study__wrapp');
  
    caseItems.forEach((item, index) => {
      index % 2 == 0 ? item.classList.add('reverse') : item.classList.remove('reverse');
      if (index >= currentIndex) {
        item.classList.add('hide');
        } else {
          item.classList.add('visible')
        }
    });
    
    const showMoreCases = document.querySelector('.show-more-cases');
    if(showMoreCases){
        showMoreCases.addEventListener('click', () => {
        const hiddenItems = document.querySelectorAll('.case-study__wrapp.hide');
        const visibleItems = document.querySelectorAll('.case-study__wrapp.visible');
          for (let i = 0; i < 3; i++) {
            if (hiddenItems[i]) {
              hiddenItems[i].classList.remove('hide');
              hiddenItems[i].classList.add('visible')
            }
          }
      
          currentIndex += 3;
          visibleItems.forEach((visible, index) => {
              index % 2 == 1 ? visible.classList.remove('reverse'): visible.classList.add('reverse');
          })
          if (document.querySelectorAll('.case-study__wrapp.hide').length === 0) {
              showMoreCases.classList.add('hide');
          }

      });
      
    }
})()