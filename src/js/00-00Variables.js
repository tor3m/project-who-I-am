// Variables collapse

const detailsForm = document.querySelector(".details__form");
const active = document.querySelector(".details-up");
const containerShare = document.querySelector(".js-containerShare");
const activeShare = document.querySelector(".share-up");
const chooseC = document.querySelector(".colors_design");
const choosec2 = document.querySelector(".colors-up");

// Variables Photo Preview

const fr = new FileReader();
const fileField = document.querySelector(".js__profile-upload-btn");
const profileImage = document.querySelector(".js__profile-image");
const profilePreview = document.querySelector(".js__profile-preview");

// Variables Formulario Preview

const form = document.querySelector(".js-form");
const nameTarget = document.querySelector(".js-name");
const job = document.querySelector(".js-job");
const phone = document.querySelector(".js-telefono");
const email = document.querySelector(".js-mail");
const linkedin = document.querySelector(".js-linkedin");
const gitHub = document.querySelector(".js-git");

// Global data
let data = {
  name: "",
  job: "",
  photo: "",
  phone: "",
  email: "",
  linkedin: "",
  github: "",
  palette: "1"
};
