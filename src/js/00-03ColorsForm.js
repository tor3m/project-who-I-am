// let photoPreviewFooter = document.querySelector("js-footerpreview");
// let photoPreviewHeader = document.querySelector(".js-headerpreview");

// // photoPreviewHeader.style.cssText = "color:red, border:purple";
// photoPreviewFooter.style.cssText = "color:red, border:purple";

const borderColor = document.querySelector("js-headerpreview");
const textColor = document.querySelector("js-name");
const links2 = document.querySelector("js-footerpreview");
const select1 = document.querySelector(".js-CHeckColor1");
const select2 = document.querySelector(".js-CHeckColor2");
const select3 = document.querySelector(".js-CHeckColor3");

function selectColor(ev) {
  let clickSelect = ev.target.value;
  if (clickSelect === "2") {
    borderColor.classList.add("border-preview2");
    textColor.classList.add("h1-color2");
    links2.classList.add("links2");
    borderColor.classList.remove("border-preview3");
    textColor.classList.remove("h1-color3");
    links2.classList.remove("links3");
  } else if (clickSelect === "3") {
    borderColor.classList.add("border-preview3");
    textColor.classList.add("h1-color3");
    links2.classList.add("links3");
    borderColor.classList.remove("border-preview2");
    textColor.classList.remove("h1-color2");
    links2.classList.remove("links2");
  } else if (clickSelect === "1") {
    borderColor.classList.remove("border-preview2");
    textColor.classList.remove("h1-color2");
    links2.classList.remove("links2");
    borderColor.classList.remove("border-preview3");
    textColor.classList.remove("h1-color3");
    links2.classList.remove("links3");
  }
}

select1.addEventListener("click", selectColor);
select2.addEventListener("click", selectColor);
select3.addEventListener("click", selectColor);
