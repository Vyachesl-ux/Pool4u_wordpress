/*
	ooooo   ooooo           oooo
	`888'   `888'           `888
	 888     888   .ooooo.   888  oo.ooooo.   .ooooo.  oooo d8b  .oooo.o
	 888ooooo888  d88' `88b  888   888' `88b d88' `88b `888""8P d88(  "8
	 888     888  888ooo888  888   888   888 888ooo888  888     `"Y88b.
	 888     888  888    .o  888   888   888 888    .o  888     o.  )88b
	o888o   o888o `Y8bod8P' o888o  888bod8P' `Y8bod8P' d888b    8""888P'
	                               888
	                              o888o
*/



/**
 * Check if current browser is Internet Explorer
 *
 * @return  {Boolean}
 */
function isIE() {
	var ua = window.navigator.userAgent;
	var msie = ua.indexOf("MSIE ") > 0;
	var trident = ua.indexOf("Trident/") > 0;
	var edge = ua.indexOf("Edge/") > 0;

	return (msie || trident || edge);
}

/**
 * Smooth scroll to an element on the page
 *
 * @param   {HTMLElement}  element        HTML element to scroll to.
 * @param   {Number}       duration       Animation duration in ms. Default 1500
 * @param   {Boolean}      centerElement  Center element on page. Default true
 */
function scrollToElement(element, duration = 1500, centerElement = true) {
	if (!element) return console.error( "HTML element missing" );

	var headerHeight = document.querySelector(".site-header").offsetHeight;
	var vacantSpace = window.innerHeight - element.offsetHeight;

	var elementTop = getOffset(element).top;

	var offset = centerElement ? elementTop - Math.max(vacantSpace / 2, headerHeight) : elementTop - headerHeight;

	// Stop ongoing animations
	if (jQuery("html, body").is(':animated')) jQuery("html, body").stop();

	jQuery("html, body").animate({
		scrollTop: offset,
	}, duration);
}


/**
 * Get an elements offset position on page
 *
 * @param   {HTMLElement}  el  HTML element to get position of
 *
 * @return  {Object}           Object containing top and left position of element
 */
function getOffset(el) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}
/**
 * Serialize form data
 *
 * @param   {HTMLElement}  Form element
 *
 * @return  {String}   Data string
 */
function serializeForm(form) {
	var data = [];
	if ( (typeof form === "object") && (form.nodeName === "FORM") ) {
		var multiples = {};
		for (var elem in form.elements) {
			if ( !form.elements.hasOwnProperty(elem) ) continue;

			var field = form.elements[elem];
			if ( field.name
				&& (!field.disabled)
				&& (field.type !== "file")
				&& (field.type !== "reset")
				&& (field.type !== "submit")
				&& (field.type !== "button") ) {

				if ( field.type === "select-multiple" ) {
					// TODO: Create this function
				} else if ( ((field.type !== "checkbox") && (field.type !== "radio")) || field.checked ) {
					if ( field.name in multiples ) {
						if (multiples[field.name].indexOf(field.value) == -1) multiples[field.name].push(field.value);
					} else {
						multiples[field.name] = [field.value];
					}
				}
			}
		}
		for (var i = 0; i < Object.keys(multiples).length; i++) {
			var values = multiples[Object.keys(multiples)[i]].join(",");
			data.push(encodeURIComponent(Object.keys(multiples)[i]) + "=" + encodeURIComponent(values));
		}
	}
	return data.join("&").replace(/%20/g, "+");
}


/**
 * Load or reload Google reCaptcha v3
 */
function loadRecaptcha(callback = null, args = null) {
	const CAPTCHA_SITE_KEY = "6LcJSiUoAAAAAEgeaFT3TmET3--IIrHeNzCfFHjK";

	grecaptcha.ready(function() {
		grecaptcha.execute(CAPTCHA_SITE_KEY, {action: 'submit'}).then(function(token) {
			let captchaResponses = document.querySelectorAll("#g-recaptcha-response");
			if (captchaResponses) for (let i = 0; i < captchaResponses.length; i++) captchaResponses[i].value = token;

			if (callback) callback(args);
		});
	});

	window.recaptchaLoaded = true;
}

/**
 * Checks if an element is the child of another element
 *
 * @param   {HTMLElement}  element  Child element
 * @param   {HTMLElement}  parent   Suspected parent element
 *
 * @return  {Boolean}               Returns true if the element is a child of the parent
 */
function childOf(element, parent) {
	if (!element) return false;
	if (element == parent) return true;

	return childOf(element.parentElement, parent);
};


/**
 * Get closest parent of specified tag name
 *
 * @param   {HTMLElement}  element  Child element
 * @param   {String}       tag      Tag name
 *
 * @return  {HTMLElement}           The closest element parent of specified tag name
 */
function getClosestByTag(element, tag) {
	if (!element) return false;
	if (element.tagName.toUpperCase() == tag.toUpperCase()) return element;

	return getClosestByTag(element.parentElement, tag);
}


/**
 * Get closest parent by class name
 *
 * @param   {HTMLElement}  element    Child element
 * @param   {String}       className  Class name
 *
 * @return  {HTMLElement}             The closest element parent by class name
 */
function getClosestByClass(element, className) {
	if (!element) return false;
	if (element.classList.contains(className)) return element;

	return getClosestByClass(element.parentElement, className);
}


