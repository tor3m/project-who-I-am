"use strict";

const containerShare = document.querySelector (".js-containerShare");
const activeShare = document.querySelector(".share-up");

function eventShare(){
    containerShare.classList.toggle("collapseShare");
    activeShare.classList.toggle("arrowShare")
}

activeShare.addEventListener("click", eventShare);