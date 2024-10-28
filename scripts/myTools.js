var status = document.getElementById("status");
var start = document.getElementById("start");
var end = document.getElementById("end");
var boundaries = document.querySelector(".boundary");

var gameStarted = "false";
var gameLost = "false";

start.addEventListener("mouseover", () => {
    gameStarted = true;
    gameLost = false;
    status.textContent = "Game started! Guide the mouse to 'E'!";
    resetBoundaries();
})

function resetBoundaries() {
    boundaries.forEach(boundary => {
      boundary.classList.remove("highlighted");
    });
  }
