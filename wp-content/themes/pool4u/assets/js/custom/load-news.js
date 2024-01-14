(() => {
    let currentIndex = 12;
    const newsItems = document.querySelectorAll('.news-grid__container');
    newsItems.forEach((item, index) => {
      if (index >= currentIndex) {
        item.classList.add('hide');
      }
    });
    const showMoreButton = document.querySelector('.show-more-button');
    if(showMoreButton){
        showMoreButton.addEventListener('click', () => {
        const hiddenItems = document.querySelectorAll('.news-grid__container.hide');
      
      for (let i = 0; i < 12; i++) {
        if (hiddenItems[i]) {
          hiddenItems[i].classList.remove('hide');
        }
      }
      
        currentIndex += 12;
      
      // Проверка, нужно ли скрывать кнопку "Показать еще новости"
        if (document.querySelectorAll('.news-grid__container.hide').length === 0) {
            showMoreButton.style.display = 'none';
        }
        });

    }
})()