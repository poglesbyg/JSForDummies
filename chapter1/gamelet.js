"use strict";
const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);

let position = 0;

function handleKeyPress(e) {
  switch (e.code) {
    case "KeyA":
    case "ArrowLeft":
      position = position - 10;
      refresh_horizontal();
      break;

    case "KeyD":
    case "ArrowRight":
      position = position + 10;
      refresh_horizontal();
      break;

    case "KeyW":
    case "ArrowUp":
      position = position - 10;
      refresh_vertical();
      break;

    case "KeyS":
    case "ArrowDown":
      position = position + 10;
      refresh_vertical();
      break;

    default:
      position = 0;
      break;
  }
}

function refresh_horizontal() {
  ball.style.left = position + "px";
}

function refresh_vertical() {
  ball.style.top = position + "px";
}
