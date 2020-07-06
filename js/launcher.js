'use strict';

(function () {
  var map = document.querySelector('.map');
  var addForm = document.querySelector('.ad-form');
  var inputs = addForm.querySelectorAll('input');
  var selects = addForm.querySelectorAll('select');
  var mapFilters = document.querySelector('.map__filters');
  var mainPin = document.querySelector('.map__pin--main');
  var filterInputs = mapFilters.querySelectorAll('input');
  var filterSelects = mapFilters.querySelectorAll('select');

  var disableElements = function (elements) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].disabled = true;
    }
  };

  var enableElements = function (elements) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].disabled = false;
    }
  };

  var disabler = function () {
    disableElements(inputs);
    disableElements(selects);
    disableElements(filterInputs);
    disableElements(filterSelects);
  };

  var enabler = function () {
    enableElements(inputs);
    enableElements(selects);
    enableElements(filterInputs);
    enableElements(filterSelects);
  };

  disabler();

  mainPin.addEventListener('mousedown', function (evt) {
    if (evt.button === 0) {
      map.classList.remove('map--faded');
      enabler();
      window.address.setAddress();
    }
  });

  mainPin.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      evt.preventDefault();
      map.classList.remove('map--faded');
      enabler();
      window.address.setAddress();
    }
  });
})();
