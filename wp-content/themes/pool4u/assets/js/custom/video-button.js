
// Video Button
(()=>{
    
    const container = document.querySelector('.is-style-video');
    if(container){
        const videoButton = container.querySelectorAll('.wp-block-button__link');
        videoButton.forEach(e => {
            e.addEventListener('click', (event) => {
                event.preventDefault();
        
                let modal = document.createElement("div");
                let modalContainer = document.createElement('div');
                let button = document.createElement('div');
                let videoContainer = document.createElement('div');
                let videoContent = document.createElement('iframe');
                const src = e.getAttribute('href');
        
                modal.classList.add("modal-video");
                modalContainer.classList.add('modal-video__container');
                videoContainer.classList.add('modal-video__content');
                button.classList.add('modal-video__close'); 
                videoContent.setAttribute("src", src);
                videoContent.setAttribute("title", "company introduction")
                document.body.appendChild(modal);
                modal.appendChild(modalContainer);
                modalContainer.appendChild(button);
                modalContainer.appendChild(videoContainer);
                videoContainer.appendChild(videoContent); 
                
                    button.addEventListener('click', () => {
                        document.body.removeChild(modal);
                    });
                    modal.addEventListener('click', () => {
                        document.body.removeChild(modal);
                    })
            })
        })
    }
    
})()