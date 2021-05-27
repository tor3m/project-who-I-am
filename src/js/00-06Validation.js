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
  let errorHtml = "";
  for (let i in data) {
    if (data[input] === "") {
      errorHtml += `Rellena ${input} ||`;
    }
  }
  errorMsg.innerHTML = errorHtml;
  const url = "https://awesome-profile-cards.herokuapp.com/card";
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.sucess === true) {
        previewCard.classList.remove("preview__card");
        shareContain.classList.add("preview__card");
        previewUrl.innerHTML = data.cardUrl;
        previewUrl.href = data.cardUrl;
        twiterButton.href = `https://twitter.com/intent/tweet?text=&url=${data.cardURL};`;
        createButton.setAttribute("disabled", "disabled");
      } else {
      }
    });
}
createButton.addEventListener("click", handlerCreateCard);
