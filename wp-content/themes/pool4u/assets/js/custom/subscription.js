/**
* 
* ░██████╗██╗░░░██╗██████╗░░██████╗░█████╗░██████╗░██╗██████╗░████████╗██╗░█████╗░███╗░░██╗
* ██╔════╝██║░░░██║██╔══██╗██╔════╝██╔══██╗██╔══██╗██║██╔══██╗╚══██╔══╝██║██╔══██╗████╗░██║
* ╚█████╗░██║░░░██║██████╦╝╚█████╗░██║░░╚═╝██████╔╝██║██████╔╝░░░██║░░░██║██║░░██║██╔██╗██║
* ░╚═══██╗██║░░░██║██╔══██╗░╚═══██╗██║░░██╗██╔══██╗██║██╔═══╝░░░░██║░░░██║██║░░██║██║╚████║
* ██████╔╝╚██████╔╝██████╦╝██████╔╝╚█████╔╝██║░░██║██║██║░░░░░░░░██║░░░██║╚█████╔╝██║░╚███║
* ╚═════╝░░╚═════╝░╚═════╝░╚═════╝░░╚════╝░╚═╝░░╚═╝╚═╝╚═╝░░░░░░░░╚═╝░░░╚═╝░╚════╝░╚═╝░░╚══╝
*
*
*  Helper functions for handling subscription functionality
*/

(function() {

	var signupForms = document.querySelectorAll(".wp-block-headspin-subscribe-form .subscribe-form");
	
	if (signupForms) {
		loadRecaptcha();

		var formStrings = {
			"general_error":				"Something went wrong. Please reload the page and try again. If the problem persists, please contact us.",
			"success":						"Thank you for subscription!",
			"invalid_email":				"E-mail address is not valid.",
			"captcha_failed":				"Captcha failed. Try submitting the form again. If the problem persists, please contact us.",
			"member_exists":				"You are already subscribed to our newsletter.",
			"member_permanently_deleted":	"You have previously unsubscribed from stories and news, and therefore could not be added again. Contact us to subscribe again.",
			"mc_general_error":				"Something went wrong with the subscription to the newsletter. If the problem persists, please contact us.",
		};

		for (var i = 0; i < signupForms.length; i++) {
			signupForms[i].addEventListener("submit", function(e) {
				var self = this;

				e.preventDefault();
				if (this.disabled) return false;

				var url = this.getAttribute("action");
				console.log(url)
				var formData = serializeForm(this);
				var messages = this.querySelector(".messages");

				messages.innerHTML = "";
				this.classList.add("sending");

				var xhttp = new XMLHttpRequest();

				xhttp.onreadystatechange = function() {

					if (this.readyState == 4) {

						self.classList.remove("sending");

						var response;

						try {
							response = JSON.parse(xhttp.responseText);
						} catch(e) {

							messages.innerHTML += "<li class='error'>" + formStrings["general_error"] + "</li>";
							return;
						}

						if (response.status == 200 && response.message == "success") {
							messages.innerHTML = "<li class='success'>" + formStrings["success"] + "</li>";
							self.disabled = true;
							self.classList.add("disabled");

							gtag("event", "abonnere", {
								event_category: "klikk",
								event_label: "nyhetsbrev",
							});

							return;
						}

						if (formStrings.hasOwnProperty(response.message)) {
							messages.innerHTML = "<li class='error'>" + formStrings[response.message] + "</li>";
						} else {
							messages.innerHTML = "<li class='error'>" + formStrings["general_error"] + "</li>";
						}
					}

					// Reload recaptcha
					loadRecaptcha();
				}

				xhttp.open("POST", url, true);
				xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
				xhttp.send(formData);
			});
		}
	}

})();
