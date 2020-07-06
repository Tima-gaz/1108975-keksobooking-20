'use strict';

(function () {
  var roomNumber = document.getElementById('room_number');
  var capacity = document.getElementById('capacity');

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

})();
