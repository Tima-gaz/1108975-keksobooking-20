'use strict';

var PIN_POINT_HEIGHT = 84;
var PIN_POINT_WIDTH = 62;

var map = document.querySelector('.map');
var addForm = document.querySelector('.ad-form');
var inputs = addForm.querySelectorAll('input');
var selects = addForm.querySelectorAll('select');
var mapFilters = document.querySelector('.map__filters');
var mainPin = document.querySelector('.map__pin--main');
var filterInputs = mapFilters.querySelectorAll('input');
var filterSelects = mapFilters.querySelectorAll('select');
var address = document.getElementById('address');
var roomNumber = document.getElementById('room_number');
var capacity = document.getElementById('capacity');

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

var setAddress = function () {
  var addressY = parseInt(mainPin.style.top, 10) + PIN_POINT_HEIGHT;
  var addressX = parseInt(mainPin.style.left, 10) + PIN_POINT_WIDTH / 2;
  address.value = addressX + ' ' + addressY;
};

setAddress();

mainPin.addEventListener('mousedown', function (evt) {
  if (evt.button === 0) {
    map.classList.remove('map--faded');
    enabler();
    setAddress();
  }
});

mainPin.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    evt.preventDefault();
    map.classList.remove('map--faded');
    enabler();
    setAddress();
  }
});

roomNumber.addEventListener('change', function () {
  if (roomNumber.children[0].selected) {
    capacity.children[0].disabled = true;
    capacity.children[1].disabled = true;
    capacity.children[3].disabled = true;
    capacity.children[2].disabled = false;
    capacity.children[2].selected = true;
  } else if (roomNumber.children[1].selected) {
    capacity.children[0].disabled = true;
    capacity.children[3].disabled = true;
    capacity.children[1].disabled = false;
    capacity.children[2].disabled = false;
    capacity.children[1].selected = true;
  } else if (roomNumber.children[2].selected) {
    capacity.children[3].disabled = true;
    capacity.children[0].disabled = false;
    capacity.children[1].disabled = false;
    capacity.children[2].disabled = false;
    capacity.children[0].selected = true;
  } else {
    capacity.children[0].disabled = true;
    capacity.children[1].disabled = true;
    capacity.children[2].disabled = true;
    capacity.children[3].disabled = false;
    capacity.children[3].selected = true;
  }
});
