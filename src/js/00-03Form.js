const form = document.querySelector(".js-form");
const nameTarget = document.querySelector(".js-name");
const job = document.querySelector(".js-job");
const phone = document.querySelector(".js-telefono");
const mail = document.querySelector(".js-mail");
const linkedin = document.querySelector(".js-linkedin");
const gitHub = document.querySelector(".js-git");

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

form.addEventListener("change", handlerTotalChange);
