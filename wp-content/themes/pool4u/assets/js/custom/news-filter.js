(() => {
    const buttons = document.querySelectorAll('.archive-filter__button');
    const container = document.querySelectorAll('.news-grid__container');
    const showMoreButton = document.querySelector('.show-more-button');
    const showMoreButtonFilter = document.querySelector('.show-more-button-filter');
    let filterableArchive = [];
    let hiddenItems = [];
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
        showMoreButton.classList.add('hide');
        filterableArchive = [];
        button.classList.toggle('active');
        const activeButtons = document.querySelectorAll('.archive-filter__button.active');
        
        container.forEach(elem => {
          let shouldShow = false;
          
          activeButtons.forEach(activeButton => {
            const filterValue = activeButton.textContent;
            const dataType = elem.firstElementChild.getAttribute('data-type');
            
            if (dataType === filterValue) {
              shouldShow = true;
            }
          });
          
          if (shouldShow) {
            elem.classList.remove('hide');
            
            filterableArchive.push(elem);
          } else {
            elem.classList.add('hide');
        }
    });
    if(filterableArchive.length >= 12) showMoreButtonFilter.classList.remove('hide');
        
    if(filterableArchive.length > 12){
        let currentIndex = 12;
        filterableArchive.forEach((item, index) => {
          if (index >= currentIndex) {
            item.classList.add('hide');
          }
        });
        showMoreButtonFilter.addEventListener('click', () => {
            hiddenItems = [];
            filterableArchive.forEach((item,index) => {
                if(item.classList.contains('hide')){
                     hiddenItems.push(item)
                } 

            })
            for (let i = 0; i < 12; i++) {
                if (hiddenItems[i]) {
                    hiddenItems[i].classList.remove('hide');
            }
          }
        currentIndex += 12;
        // console.log(hiddenItems)
        if (currentIndex >= hiddenItems.length) {
            showMoreButtonFilter.classList.add('hide');
          }
    })
    
    }
    
        if (activeButtons.length === 0) {
            container.forEach((elem, index) => {
              elem.classList.remove('hide');
              if(index >= 12){
                elem.classList.add('hide');
                showMoreButton.classList.remove('hide');
                showMoreButtonFilter.classList.add('hide')
              }
            });

        } else {
            showMoreButton.classList.add('hide');
        }
      });
      hiddenItems = [];
    });
    
})()