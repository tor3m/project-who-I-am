"use strict";

function eventFill() {
  chooseC.classList.toggle("collapseShare");
  choosec2.classList.toggle("arrowShare");
}

function eventFill2() {
  detailsForm.classList.toggle("collapseShare");
  active.classList.toggle("arrowShare");
}

function eventFill3() {
  containerShare.classList.toggle("collapseShare");
  activeShare.classList.toggle("arrowShare");
}

choosec2.addEventListener("click", eventFill);
active.addEventListener("click", eventFill2);
activeShare.addEventListener("click", eventFill3);
