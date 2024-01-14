/**
 *  .oooooo..o  o8o      .
 * d8P'    `Y8  `"'    .o8
 * Y88bo.      oooo  .o888oo  .ooooo.
 *  `"Y8888o.  `888    888   d88' `88b
 *      `"Y88b  888    888   888ooo888
 * oo     .d8P  888    888 . 888    .o
 * 8""88888P'  o888o   "888" `Y8bod8P'
 *
 */

(() => {

	// Add fixes to object-fit image elements in IE
	var imgContainers = document.querySelectorAll(".fit-image-container");
	if (imgContainers && isIE()) {
		for (var i = 0; i < imgContainers.length; i++) {
			var image = imgContainers[i].querySelector("img");
			if (!image) continue;
			var src = image.src;

			image.style.opacity = 0;
			imgContainers[i].style.backgroundImage = "url(" + src + ")";
		}
	}

	/**
	 * Automatically open all external links in new tab
	 */
	var links = document.querySelectorAll("a");
	for (var i = 0; i < links.length; i++) {
		if (links[i].href.indexOf(window.location.host) == -1 &&
			links[i].href.indexOf("tel:") != 0 &&
			links[i].href.indexOf("mailto:") != 0 &&
			links[i].href.indexOf("javascript:") != 0 &&
			links[i].href.indexOf("web.headspin.no") == -1) {
			links[i].setAttribute("target", "_blank");
			links[i].setAttribute("rel", "noopener noreferrer");
		}
	}
			/**
	 * Show grecaptcha badge when form is focused
	 */
			const grecaptchaFields = document.querySelectorAll("input[name='g-recaptcha-response']");
			if (grecaptchaFields) {
				grecaptchaFields.forEach(grecaptchaField => {
					const form = getClosestByTag(grecaptchaField, "form");
					const elements = form.querySelectorAll("input, textarea, select");
					elements.forEach(i => i.addEventListener("focus", e => document.body.classList.add("show-captcha-badge")));
				});
		
				window.addEventListener("mousedown", e => {
					if (e.target.tagName == "input" || e.target.tagName == "textarea") return;
					document.body.classList.remove("show-captcha-badge");
				});
			}

})();
