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
	const hamburger = document.querySelector(".hamburger");
	const mobileHeader = document.querySelector("#masthead-mobile");
	const mobileMenu = document.querySelector(".main-navigation.mobile");
	const menuClue = document.querySelector(".menu-clue");

	hamburger.addEventListener("click", function(){
		if(!mobileHeader.classList.contains("active")) {
			hamburger.classList.add("active");
			mobileHeader.classList.add("active");
			mobileMenu.classList.add("active");
			document.documentElement.classList.add("open-menu");
			menuClue.innerHTML = 'close';
		} else {
			hamburger.classList.remove("active");
			mobileHeader.classList.remove("active");
			mobileMenu.classList.remove("active");
			document.documentElement.classList.remove("open-menu");
			menuClue.innerHTML = "menu";
		}
	});

	const menuItems = mobileMenu.querySelectorAll(".menu-item-has-children");

	menuItems.forEach(item => {
		const link = item.querySelector("a");
		const submenu = item.querySelector(".sub-menu");
		link.addEventListener("click", function(e){
			e.preventDefault();
			const subItems = Array.prototype.slice.call(submenu.children);
			const isOpen = item.classList.toggle("active");
			let newHeight = 0;
			if( isOpen ) subItems.forEach(subItem => newHeight += subItem.offsetHeight);
			submenu.style.height = newHeight + "px";
		})
	});
})();
