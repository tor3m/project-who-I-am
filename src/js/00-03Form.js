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


// const buttonReset = document.getElementById('#reset').reset();
// function resetForm(){
//   location.reset();
// }

// buttonReset.addEventListener("click", resetForm());


// const reloadButton = document.getElementById("reset");

const reloadButton = document.getElementById("resetform").reset();
function cleanForm() {
  location.reset();
}

reloadButton.addEventListener("click", cleanForm());

// function reload() {
  
//   location.reload();

// }
//

