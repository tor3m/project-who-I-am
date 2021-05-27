"use strict";

// carga datos de storage
if(localStorage.getItem("localData")) {
  data = JSON.parse(localStorage.getItem("localData"));
}

function saveLocalStorage() {
  localStorage.setItem("localData",JSON.stringify(data));
}
