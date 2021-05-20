// let photoPreviewFooter = document.querySelector("js-footerpreview");
// let photoPreviewHeader = document.querySelector(".js-headerpreview");

// // photoPreviewHeader.style.cssText = "color:red, border:purple";
// photoPreviewFooter.style.cssText = "color:red, border:purple";

const borderColor = document.querySelector(".js__border-palette");
const textColor = document.querySelector(".js-name");
const links2 = document.querySelector(".js-footerpreview");
const select1 = document.querySelector(".js-CHeckColor1");
const select2 = document.querySelector(".js-CHeckColor2");
const select3 = document.querySelector(".js-CHeckColor3");

let linkPallete = document.querySelectorAll(".js__link__pallete")


function selectColor(ev) {
  let clickSelect = ev.target.value;
  if (clickSelect === "2") {
    //color texto//
    textColor.classList.add("h1-color2");
    textColor.classList.remove("h1-color3");
    //color borde//
    borderColor.classList.add("border-preview2");
    borderColor.classList.remove("border-preview3");
    //color links//
    for (const links of linkPallete){
    links.classList.add("links2");
    links.classList.remove("links3");
  }
  };


  if (clickSelect === "3") {
    //color texto//
    textColor.classList.add("h1-color3");
    //color borde//
    borderColor.classList.add("border-preview3");
    //color links//
    for (const links of linkPallete){
      links.classList.add("links3");
    }
  }

  if (clickSelect === "1") {
    //color texto//
    textColor.classList.remove("h1-color3", "h1-color2");
    //color borde//
    borderColor.classList.remove("border-preview3","border-preview2");
    //color links//
    for (const links of linkPallete){
      links.classList.remove("links3", "links2");
    }
  }
};


select1.addEventListener("click", selectColor);
select2.addEventListener("click", selectColor);
select3.addEventListener("click", selectColor);
