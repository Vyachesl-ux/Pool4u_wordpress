// Accordion for faq 

(() => {
	const accordions = document.querySelectorAll(".wp-block-pool4u-accordion-item");
	if (accordions) accordions.forEach(item => {
	  item.container = item.querySelector(".accordion__subtitle-container");
  
	  item.addEventListener("click", () => {
		const open = item.classList.toggle("expanded");
  
		const maxHeight = open ? `${item.container.scrollHeight}px` : 0;
  
		
		item.container.style.height = maxHeight;
	  });
	});
  })();
  
  
