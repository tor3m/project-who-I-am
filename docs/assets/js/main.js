const detailsForm=document.querySelector(".details__form"),active=document.querySelector(".details-up"),containerShare=document.querySelector(".js-containerShare"),activeShare=document.querySelector(".share-up"),chooseC=document.querySelector(".colors_design"),choosec2=document.querySelector(".colors-up"),fr=new FileReader,fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview"),form=document.querySelector(".js-form"),nameTarget=document.querySelector(".js-name"),job=document.querySelector(".js-job"),phone=document.querySelector(".js-telefono"),email=document.querySelector(".js-mail"),linkedin=document.querySelector(".js-linkedin"),gitHub=document.querySelector(".js-git");let data={name:"",job:"",photo:"",phone:"",email:"",linkedin:"",github:"",palette:"1"};function eventFill(){chooseC.classList.toggle("collapseShare"),choosec2.classList.toggle("arrowShare")}function eventFill2(){detailsForm.classList.toggle("collapseShare"),active.classList.toggle("arrowShare")}function eventFill3(){containerShare.classList.toggle("collapseShare"),activeShare.classList.toggle("arrowShare")}function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){data.photo=fr.result,""===data.photo?profileImage.style.backgroundImage="https://www.w3schools.com/howto/img_avatar2.png":(profileImage.style.backgroundImage=`url(${data.photo})`,profilePreview.style.backgroundImage=`url(${data.photo})`),saveLocalStorage()}function fakeFileClick(){fileField.click()}choosec2.addEventListener("click",eventFill),active.addEventListener("click",eventFill2),activeShare.addEventListener("click",eventFill3),fileField.addEventListener("change",getImage);const borderColor=document.querySelector(".js-headerpreview"),textColor=document.querySelector(".js-name"),links2=document.querySelector(".js-footerpreview"),select1=document.querySelector(".js-CHeckColor1"),select2=document.querySelector(".js-CHeckColor2"),select3=document.querySelector(".js-CHeckColor3");let linkPallete=document.querySelectorAll(".js__link__pallete"),linkRadius=document.querySelectorAll(".js__link__radius");function selectColor(e){let t=e.target.value;if("2"===t){textColor.classList.add("h1-color2"),textColor.classList.remove("h1-color3"),borderColor.classList.add("border-preview2"),borderColor.classList.remove("border-preview3");for(const e of linkPallete)e.classList.add("links2"),e.classList.remove("links3");for(const e of linkRadius)e.classList.add("links2_1"),e.classList.remove("links3_1")}if("3"===t){textColor.classList.add("h1-color3"),borderColor.classList.add("border-preview3");for(const e of linkPallete)e.classList.add("links3");for(const e of linkRadius)e.classList.add("links3_1"),e.classList.remove("links2_1")}if("1"===t){textColor.classList.remove("h1-color3","h1-color2"),borderColor.classList.remove("border-preview3","border-preview2");for(const e of linkPallete)e.classList.remove("links3","links2");for(const e of linkRadius)e.classList.remove("links2_1")}data.palette=t}function handlerChangeForm(e){const t=e.target.name,r=e.target.value;"fullName"===t?data.name=r:"workTitle"===t?data.job=r:"email"===t?data.email=r:"phone"===t?data.phone=r:"linkedin"===t?data.linkedin=r:"github"===t&&(data.github=r)}function hadlerChangePreview(){nameTarget.innerHTML=data.name,job.innerHTML=data.job,phone.href=data.phone,email.href=data.email,linkedin.href="https://linkedin.com/in/"+data.linkedin,gitHub.href="https://github.com/"+data.github}function handlerTotalChange(e){handlerChangeForm(e),hadlerChangePreview()}select1.addEventListener("click",selectColor),select2.addEventListener("click",selectColor),select3.addEventListener("click",selectColor),form.addEventListener("keyup",handlerTotalChange);let buttonReset=document.querySelector(".js-btn-reset");function resetForm(e){document.getElementById("resetform").reset(),deleteAllPreview(),resetPallete()}function deleteAllPreview(){nameTarget.innerHTML="Nombre Apellido",job.innerHTML="Front-end developer",profilePreview.style.background="url(https://www.w3schools.com/howto/img_avatar2.png) center",profileImage.style.background="url(https://www.w3schools.com/howto/img_avatar2.png) center",phone.href="",email.href="",linkedin.href="",gitHub.href=""}function resetPallete(){textColor.classList.remove("h1-color3","h1-color2"),borderColor.classList.remove("border-preview3","border-preview2");for(const e of linkPallete)e.classList.remove("links3","links2");for(const e of linkRadius)e.classList.remove("links2_1")}function saveLocalStorage(){localStorage.setItem("localData",JSON.stringify(data))}buttonReset.addEventListener("click",resetForm),localStorage.getItem("localData")&&(data=JSON.parse(localStorage.getItem("localData")));const createButton=document.querySelector(".js_share_card_button"),previewUrl=document.querySelector(".preview__url"),previewSection=document.querySelector("preview"),twiterButton=document.querySelector(".preview__twitter"),previewCard=document.querySelector(".js_preview_card"),shareContain=document.querySelector(".js-containerShare"),errorMsg=document.querySelector(".js-error");function handlerCreateCard(e){e.preventDefault();let t=!1;for(let e in data)""===data[e]&&(errorMsg.innerHTML+=`"Rellena ${e}"<br>`,t=!0);if(t)return;fetch("https://awesome-profile-cards.herokuapp.com/card",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)}).then(e=>e.json()).then(e=>{!0===e.success?(previewCard.classList.remove("preview__card"),shareContain.classList.add("preview__card"),previewUrl.innerHTML=e.cardURL,previewUrl.href=e.cardURL,twiterButton.href=`https://twitter.com/intent/tweet?text=&url=${e.cardURL};`,createButton.setAttribute("disabled","disabled"),saveLocalStorage()):console.log("esta mal")}).catch(e=>{console.log(e)})}createButton.addEventListener("click",handlerCreateCard);