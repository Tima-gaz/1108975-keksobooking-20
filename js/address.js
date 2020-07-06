'use strict';

(function () {
  var PIN_POINT_HEIGHT = 84;
  var PIN_POINT_WIDTH = 62;

  var mainPin = document.querySelector('.map__pin--main');
  var address = document.getElementById('address');

  var setAddress = function () {
    var addressY = parseInt(mainPin.style.top, 10) + PIN_POINT_HEIGHT;
    var addressX = parseInt(mainPin.style.left, 10) + PIN_POINT_WIDTH / 2;
    address.value = addressX + ' ' + addressY;
  };
  setAddress();

  window.address.setAddress = setAddress;
})();
