const caseFilterButtons = document.querySelectorAll('.case-filter__button');

if(caseFilterButtons){
    caseFilterButtons.forEach((button) => {
        button.addEventListener('click', addActive);

        
    })
    function addActive(event){
        if(event.target.classList.contains('active')){
            caseFilterButtons.forEach(button => {
                button.classList.remove('active');
            })
        } else{

            caseFilterButtons.forEach(button => {
                button.classList.remove('active');
        
                event.target.classList.add('active');
    
            })
        }
    }
}