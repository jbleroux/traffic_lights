//FUNCTIONS

function illuminateRed() {
  clearlights(); // NEED TO CALL FIRST OR ELSE CANCELS OUT
  document.getElementById('stopLight').style.backgroundColor = "red";
}

function illuminateOrange() {
  clearlights();
  document.getElementById('slowLight').style.backgroundColor = "orange";
}

function illuminateGreen() {
  clearlights();
  document.getElementById('goLight').style.backgroundColor = "green";
}

function clearlights() {
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}

//BINDINGS
document.getElementById('stopButton').onclick = illuminateRed;
document.getElementById('slowButton').onclick = illuminateOrange;
document.getElementById('goButton').onclick = illuminateGreen;

//DEFAULT

illuminateGreen();
