"use strict";

const detailsForm = document.querySelector(".details__form");
const active = document.querySelector(".details-up");

function evenT() {
  detailsForm.classList.toggle("collapse");
  active.classList.toggle("arrowShare");
}
active.addEventListener("click", evenT);
//
