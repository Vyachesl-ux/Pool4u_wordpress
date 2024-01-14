// Выбираем последний родительский элемент футера
(() => {
    const footerContainer = document.querySelector('.footer-menu');
    const footerLastElement = footerContainer.querySelectorAll('.menu-item-has-children:last-of-type');
    const subMenuItems = footerLastElement[0].querySelectorAll('.menu-item');

    if(subMenuItems){
        subMenuItems.forEach(item => {
            const innerText = item.textContent;
            item.classList.add(innerText.toLowerCase());
        })
    }
})()



