document.addEventListener('DOMContentLoaded', function () {
    // Открытие виджета по клику
    document.body.addEventListener('click', function (e) {
      var target = e.target;
  
      if (target.classList.contains('callback-button-phone')) {
        e.preventDefault();
        var widgetCallback = document.querySelector('.widget-callback');
        widgetCallback.classList.toggle('widget-callback-form-open');
      }
    });
  
    // Ajax-отправка данных
    var callbackWidgetForm = document.getElementById('calbback-widget-form');
    if (callbackWidgetForm) {
      callbackWidgetForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var formID = this.id;
        var formNm = document.getElementById(formID);
  
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '../../mail.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  
        xhr.onload = function () {
          if (xhr.status >= 200 && xhr.status < 400) {
            formNm.innerHTML = xhr.responseText;
          } else {
            formNm.innerHTML = 'Error occurred.';
          }
        };
  
        xhr.onerror = function () {
          formNm.innerHTML = 'Request failed.';
        };
  
        xhr.send(new URLSearchParams(new FormData(formNm)));
      });
    }
  });
  