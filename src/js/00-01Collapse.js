"use strict";

function eventFill() {
  chooseC.classList.toggle("collapseShare");
  choosec2.classList.toggle("arrowShare");
  detailsForm.classList.toggle("collapseShare");
  active.classList.toggle("arrowShare");
  containerShare.classList.toggle("collapseShare");
  activeShare.classList.toggle("arrowShare");
}
choosec2.addEventListener("click", eventFill);
active.addEventListener("click", eventFill);
activeShare.addEventListener("click", eventFill);
