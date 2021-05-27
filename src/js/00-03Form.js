"use strict";

const data = {
  name: "",
  job: "",
  img: "",
  phone: "",
  mail: "",
  linkedin: "",
  git: "",
};

function handlerChangeForm(ev) {
  const inputNameChange = ev.target.name;
  const inputValueChange = ev.target.value;
  if (inputNameChange === "fullName") {
    data.name = inputValueChange;
    nameTarget.innerHTML = data.name;
  } else if (inputNameChange === "workTitle") {
    data.job = inputValueChange;
  } else if (inputNameChange === "email") {
    data.mail = inputValueChange;
  } else if (inputNameChange === "phone") {
    data.phone = inputValueChange;
  } else if (inputNameChange === "linkedin") {
    data.linkedin = inputValueChange;
  } else if (inputNameChange === "github") {
    data.git = inputValueChange;
  }
}

function hadlerChangePreview() {
  nameTarget.innerHTML = data.name;
  job.innerHTML = data.job;
  phone.href = data.phone;
  mail.href = data.mail;
  linkedin.href = "https://linkedin.com/in/${data.linkedin}";
  gitHub.href = "https://github.com/${data.git}";
}

function handlerTotalChange(ev) {
  handlerChangeForm(ev);
  hadlerChangePreview();
}

form.addEventListener("keyup", handlerTotalChange);

//REset
let buttonReset = document.querySelector(".js-btn-reset");

function resetForm(ev) {
  document.getElementById("resetform").reset();
  deleteAllPreview();
  resetPallete();
}

function deleteAllPreview() {
  nameTarget.innerHTML = "Nombre Apellido";
  job.innerHTML = "Front-end developer";
  profilePreview.style.background =
    "url(https://www.w3schools.com/howto/img_avatar2.png) center";
  profileImage.style.background =
    "url(https://www.w3schools.com/howto/img_avatar2.png) center";
  phone.href = "";
  mail.href = "";
  linkedin.href = "";
  gitHub.href = "";
}

function resetPallete() {
  textColor.classList.remove("h1-color3", "h1-color2");
  borderColor.classList.remove("border-preview3", "border-preview2");
  for (const links of linkPallete) {
    links.classList.remove("links3", "links2");
  }
  for (const links2 of linkRadius) {
    links2.classList.remove("links2_1");
  }
}

buttonReset.addEventListener("click", resetForm);
