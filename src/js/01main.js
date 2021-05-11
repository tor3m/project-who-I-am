/*  SOLUCION D ELUCIA  <!DOCTYPE html>

  <body>
    <button class="button1"><i class="fas fa-chevron-down fa-chevron-up arrow"></i></button>
    <div class="js-container1 container1">
      <p>
        Lorerit viciis consectetur esse iure, omnis dignissimos
        ut natus?
      </p>
    </div>
    </div>
    <script src="main.js"></script>
  </body>
</html>  
"use strict";
const container = document.querySelector(".colors_line");
const active = document.querySelector(".b");
function evenT() {
  container.classList.toggle("collapse");
  active.classList.toggle("arrow");
}
active.addEventListener("click", evenT);



/*