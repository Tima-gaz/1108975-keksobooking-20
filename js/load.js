'use strict';

(function () {
  var URL = 'https://javascript.pages.academy/keksobooking/data';
  var statusCode = {
    OK: 200
  };

  window.load = function (onLoad) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === statusCode.OK) {
        onLoad(xhr.response);
      }
    });

    xhr.open('GET', URL);
    xhr.send();
  };
})();
