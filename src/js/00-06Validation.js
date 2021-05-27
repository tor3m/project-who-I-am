"use strict";

const createButton = document.querySelector(".js_share_card_button");
const previewUrl = document.querySelector(".preview__url");
const previewSection = document.querySelector("preview");
const twiterButton = document.querySelector(".preview__twitter");
const previewCard = document.querySelector(".js_preview_card");
const shareContain = document.querySelector(".js-containerShare");
const errorMsg = document.querySelector(".js-error");

function handlerCreateCard(ev) {
  ev.preventDefault();
  
  let breakFunction = false;
  for (let input in data) {
    if (data[input] === "") {
      errorMsg.innerHTML += `Rellena ${input}<br>`;
      breakFunction = true;
    }
  }
  // salte inmediatamente de la funcion
  if(breakFunction) return;

  const url = "https://awesome-profile-cards.herokuapp.com/card";
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {

      if (data.success === true) {
        previewCard.classList.remove("preview__card");
        shareContain.classList.add("preview__card");
        previewUrl.innerHTML = data.cardURL;
        previewUrl.href = data.cardURL;
        twiterButton.href = `https://twitter.com/intent/tweet?text=&url=${data.cardURL};`;
        createButton.setAttribute("disabled", "disabled");
        saveLocalStorage();
      } else {
        console.log('esta mal')
      }
    }).catch((error) => {
      console.log(error)
    });
}
createButton.addEventListener("click", handlerCreateCard);
