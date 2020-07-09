'use strict';

(function () {
  var pinTemplate = document.querySelector('#pin')
    .content
    .querySelector('.map__pin');
  var pinsList = document.querySelector('.map__pins');
  var renderPins = function (loadedPins) {
    var pins = loadedPins;
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < pins.length; i++) {
      var pinElement = pinTemplate.cloneNode(true);
      var pinPicture = pinElement.querySelector('img');
      pinElement.style.left = (pins[i].location.x - pinPicture.width / 2) + 'px';
      pinElement.style.top = (pins[i].location.y - pinPicture.height) + 'px';
      pinPicture.src = pins[i].author.avatar;
      pinPicture.alt = pins[i].offer.title;
      fragment.appendChild(pinElement);
    }
    pinsList.appendChild(fragment);
  };
  window.load(renderPins);
})();
