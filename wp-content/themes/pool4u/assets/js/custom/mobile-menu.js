/**
 * ███╗   ███╗███████╗███╗   ██╗██╗   ██╗
 * ████╗ ████║██╔════╝████╗  ██║██║   ██║
 * ██╔████╔██║█████╗  ██╔██╗ ██║██║   ██║
 * ██║╚██╔╝██║██╔══╝  ██║╚██╗██║██║   ██║
 * ██║ ╚═╝ ██║███████╗██║ ╚████║╚██████╔╝
 * ╚═╝     ╚═╝╚══════╝╚═╝  ╚═══╝ ╚═════╝
 *
 */

(() => {
	if (document.documentElement.clientWidth <= 768) {
		let nav = document.querySelectorAll('.menu-item:not(:last-child)');
		nav.forEach(e => {
		   e.addEventListener('click', (event) => {
			  if (event.type === 'click') {
				 setTimeout(() => {
					document.getElementById('menu__toggle').checked = false;
					document.body.classList.remove('overflow')
				 }, 100);
			  }
		   })
		})
	 }
	 let checkbox = document.getElementById('menu__toggle');
	 checkbox.addEventListener('click', (e) => {
		if (checkbox.checked) {
		   document.body.classList.add('overflow')
		} else {
		   document.body.classList.remove('overflow')
		}
		  
	 });
	 
	

	
})();
