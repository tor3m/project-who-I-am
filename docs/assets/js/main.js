"use strict";const chooseC=document.querySelector(".colors_design"),choosec2=document.querySelector(".colors-up");function eventFill(){chooseC.classList.toggle("collapseShare"),choosec2.classList.toggle("arrowShare")}choosec2.addEventListener("click",eventFill);const detailsForm=document.querySelector(".details__form"),active=document.querySelector(".buton");function evenT(){detailsForm.classList.toggle("collapse"),active.classList.toggle("details-up")}active.addEventListener("click",evenT);const fr=new FileReader,fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview");function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`}function fakeFileClick(){fileField.click()}fileField.addEventListener("change",getImage);const containerShare=document.querySelector(".js-containerShare"),activeShare=document.querySelector(".share-up");function eventShare(){containerShare.classList.toggle("collapseShare"),activeShare.classList.toggle("arrowShare")}activeShare.addEventListener("click",eventShare);