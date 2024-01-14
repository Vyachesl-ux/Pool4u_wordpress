(() => {    
    const caseFilterButtons = document.querySelectorAll('.case-filter__button');
    const caseContainer = document.querySelectorAll('.case-study__wrapp');
    const loadMoreCases = document.querySelector('.show-more-cases');
    let counter = 0;
    
    if(caseFilterButtons && loadMoreCases){
        caseContainer.length < 3 ? loadMoreCases.classList.add('hide') : loadMoreCases.classList.remove('hide')
        caseFilterButtons.forEach(button => {
            button.addEventListener('click', filterCases);
            
            function filterCases(){
                const buttonValue = button.textContent;
               window.history.replaceState(null, null, '/case-studies/' + buttonValue);
               
                caseContainer.forEach((element, index) => {
                    const dataType = element.getAttribute('data-type');
                    dataType !== buttonValue && button.classList.contains("active") ? element.classList.add('hide') : element.classList.remove('hide');
                    if(!button.classList.contains("active")){
                        window.history.replaceState(null, null, '/case-studies/');
                        index % 2 == 0 ? element.classList.add('reverse') : element.classList.remove('reverse');
                        if(index > 2)  { 
                            element.classList.add('hide')
                            element.classList.remove('visible')
                        } else {
                            element.classList.remove('hide');
                            element.classList.add('visible')
                            loadMoreCases.classList.remove('hide')
                        }
                            
                    }
                    if(!element.classList.contains('hide')) counter++;
                    counter <= 3 && button.classList.contains("active") ? loadMoreCases.classList.add("hide") : loadMoreCases.classList.remove('hide');
                    
                    if(!element.classList.contains("hide") ){
                        element.classList.add('visible');
                        console.log(visibleElements)
                    } else {
                        element.classList.remove('visible');
                    }
                    let visibleElements = document.querySelectorAll('.case-study__wrapp.visible');
                    visibleElements.forEach((visible, index) => {
                        index % 2 == 0 ? visible.classList.remove('reverse') : visible.classList.add('reverse');
                    });
                });

                counter = 0;
                
            }
            
        });
    }
})()