"use strict";
function getLocalHost() {
  localStorage.setItem("localData", JSON.stringify(data));
}

let saveDataLocal = JSON.parse(localStorage.getItem("localData"));

function saveLocalStorage() {
  if (saveDataLocal != null) {
    nameInput.value = saveDataLocal.name;
    workInput.value = saveDataLocal.job;
    emailInput.value = saveDataLocal.email;
    phoneInput.value = saveDataLocal.phone;
    linkedinInput.value = saveDataLocal.linkedin;
    githubInput.value = saveDataLocal.github;
    data = saveDataLocal;
  }
  hadlerChangePreview();
  selectColor();
  getImage();
}
saveLocalStorage();
