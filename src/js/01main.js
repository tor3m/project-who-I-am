"use strict";
const chooseC = document.querySelector(".colors_design");
const choosec2 = document.querySelector(".colors-up");
function eventFill() {
  chooseC.classList.toggle("collapseShare");
  choosec2.classList.toggle("arrowShare");
}
choosec2.addEventListener("click", eventFill);
