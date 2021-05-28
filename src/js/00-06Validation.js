"use strict";

const createButton = document.querySelector(".js_share_card_button");
const previewUrl = document.querySelector(".preview__url");
const previewSection = document.querySelector("preview");
const twiterButton = document.querySelector(".preview__button");
const previewCard = document.querySelector(".js_preview_card");
const shareContain = document.querySelector(".js-containerShare");
const errorMsg = document.querySelector(".js-error");
const whatsappPreviewBtn = document.querySelector(".js-telefono");
const emailPreviewBtn = document.querySelector(".js-mail");
const linkedinPreviewBtn = document.querySelector(".js-linkedin");
const gitPreviewBtn = document.querySelector(".js-git");

function handlerCreateCard(ev) {
  ev.preventDefault();
  
  let breakFunction = false;
  for (let input in data) {
    if (data[input] === "") {
      errorMsg.innerHTML += `"Rellena ${input}"<br>`;
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
        twiterButton.href = `https://twitter.com/?lang=es= + ${data.cardURL}`;
        whatsappPreviewBtn.href = `https://api.whatsapp.com/send?phone= + ${data.phone}`;
        emailPreviewBtn.href = `mailto: + ${data.email}`;
        linkedinPreviewBtn.href = `https://www.linkedin.com/in/ + ${data.linkedin}`;
        gitPreviewBtn.href = `https://github.com/ + ${data.github}`;
        createButton.setAttribute("disabled", "disabled");
        saveLocalStorage();
        handleTwitterButtonShare()
      } else {
        console.log('esta mal')
      }
    }).catch((error) => {
      console.log(error)
    });
}
createButton.addEventListener("click", handlerCreateCard);
