// Accordion for faq 

(() => {
	const accordions = document.querySelectorAll(".wp-block-headspin-accordion-item");
	if (accordions) accordions.forEach(item => {
		item.container = item.querySelector(".accordion__subtitle-container");
		item.container.style.height = 0;
		item.addEventListener("click", () => {
			const open = item.classList.toggle("expanded");
			item.container.style.height = open ? `${item.container.firstElementChild.offsetHeight}px` : 0;
		});
	});
})();
