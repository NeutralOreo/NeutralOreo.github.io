var x = document.getElementById("xCoordinate");
var y = document.getElementById("yCoordinate");


function getCoordinates(e) {
    x.textContent = "The X Coordinate is: " + e.clientX;
    y.textContent = "The Y Coordinate is: " + e.clientY;

  }

function clearCoordinates(e) {
    var clear = e.keyCode;
    if (clear == 67) {
    x.textContent = "The X Coordinate is: 0";
    y.textContent = "The Y Coordinate is: 0";
  }
}

var mouseChecker = document;
mouseChecker.addEventListener('keydown', clearCoordinates, false);
mouseChecker.addEventListener('mousemove', getCoordinates, false);
