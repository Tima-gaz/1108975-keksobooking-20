'use strict';

var PIN_AMOUNT = 8;
var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var ROOM_TYPE = ['palace', 'flat', 'house', 'bungalo'];
var BLOCK_SIZE = 1000;
var map = document.querySelector('.map');
var pinTemplate = document.querySelector('#pin')
  .content
  .querySelector('.map__pin');
var pinsList = map.querySelector('.map__pins');
var randomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
var shuffle = function (array) {
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;

  while (currentIndex !== 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

var generatePin = function () {
  var pins = [];
  for (var i = 0; i < PIN_AMOUNT; i++) {
    var featuresArr = shuffle(FEATURES);
    var featuresAmount = randomInt(1, FEATURES.length);
    for (var j = FEATURES.length - featuresAmount; j > 0; j--) {
      featuresArr.pop();
    }
    var photosArray = [];
    var photosArrayLength = randomInt(1, 10);
    for (var k = 0; k < photosArrayLength; k++) {
      photosArray[k] = 'http://o0.github.io/assets/images/tokyo/hotel' + k + 1 + '.jpg';
    }
    var locationX = randomInt(0, BLOCK_SIZE);
    var locationY = randomInt(130, 630);
    var pin = {
      author: {
        avatar: 'img/avatars/user0' + (i + 1) + '.png'
      },
      offer: {
        title: 'Заголовок',
        address: locationX + ',' + ' ' + locationY,
        price: randomInt(6, 100) * 100,
        type: ROOM_TYPE[randomInt(0, ROOM_TYPE.length - 1)],
        rooms: randomInt(1, 6),
        guests: randomInt(1, 15),
        checkin: '1' + randomInt(2, 4) + ':00',
        checkout: '1' + randomInt(2, 4) + ':00',
        features: featuresArr,
        description: 'Описание',
        photos: photosArray
      },
      location: {
        x: locationX,
        y: locationY
      }
    };
    pins[i] = pin;
  }
  return pins;
};

map.classList.remove('map-faded');

var renderPins = function () {
  var pins = generatePin();
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
  return fragment;
};

pinsList.appendChild(renderPins());
