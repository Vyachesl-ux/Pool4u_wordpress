"use strict";

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

(function () {
  var signupForms = document.querySelectorAll(".wp-block-headspin-subscribe-form .subscribe-form");
  console.log(signupForms);
  if (signupForms) {
    // loadRecaptcha();

    var formStrings = {
      "general_error": "Noe gikk galt. Last siden på nytt og prøv igjen. Hvis problemet vedvarer, vennligst ta kontakt.",
      "success": "Påmelding registrert",
      "invalid_email": "E-postadressen er ikke gyldig",
      "captcha_failed": "Captcha feilet. Prøv å send skjemaet på nytt. Hvis problemet vedvarer, vennligst ta kontakt.",
      "member_exists": "Du abonnerer allerede på vårt nyhetsbrev.",
      "member_permanently_deleted": "Du har tidligere avsluttet abonnementet på historier og nyheter, og kunne derfor ikke legges til på nytt. Ta kontakt med oss for å abonnere på nytt.",
      "mc_general_error": "Noe gikk galt med påmeldingen til nyhetsbrevet. Hvis problemet vedvarer, vennligst ta kontakt."
    };
    for (var i = 0; i < signupForms.length; i++) {
      signupForms[i].addEventListener("submit", function (e) {
        var self = this;
        e.preventDefault();
        if (this.disabled) return false;
        var url = this.getAttribute("action");
        var formData = serializeForm(this);
        var messages = this.querySelector(".messages");
        messages.innerHTML = "";
        this.classList.add("sending");
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4) {
            self.classList.remove("sending");
            var response;
            try {
              response = JSON.parse(xhttp.responseText);
            } catch (e) {
              messages.innerHTML += "<li class='error'>" + formStrings["general_error"] + "</li>";
              return;
            }
            if (response.status == 200 && response.message == "success") {
              messages.innerHTML = "<li class='success'>" + formStrings["success"] + "</li>";
              self.disabled = true;
              self.classList.add("disabled");
              gtag("event", "abonnere", {
                event_category: "klikk",
                event_label: "nyhetsbrev"
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
        };
        xhttp.open("POST", url, true);
        xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhttp.send(formData);
      });
    }
  }
})();