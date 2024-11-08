document.addEventListener("DOMContentLoaded", function() {

  var customModal1 = document.getElementById("customModal1");
  var customImg1 = document.getElementById("customImg1");
  var customModalImg1 = document.getElementById("customModalImg1");
  var customCaption1 = document.getElementById("customCaption1");
  customImg1.onclick = function() {
    customModal1.style.display = "block";
    customModalImg1.src = this.src;
    customCaption1.innerHTML = this.alt;
  };
  var closeCustomModal1 = document.getElementsByClassName("close1")[0];
  closeCustomModal1.onclick = function() {
    customModal1.style.display = "none";
  };
  window.onclick = function(event) {
    if (event.target == customModal1) {
      customModal1.style.display = "none";
    }
  };

  /////////////////////////////////////////////////////////////////////////////////////////////

  var customModal2 = document.getElementById("customModal2");
  var customImg2 = document.getElementById("customImg2");
  var customModalImg2 = document.getElementById("customModalImg2");
  var customCaption2 = document.getElementById("customCaption2");
  customImg2.onclick = function() {
    customModal2.style.display = "block";
    customModalImg2.src = this.src;
    customCaption2.innerHTML = this.alt;
  };
  var closeCustomModal2 = document.getElementsByClassName("close2")[0];
  closeCustomModal2.onclick = function() {
    customModal2.style.display = "none";
  };
  window.onclick = function(event) {
    if (event.target == customModal2) {
      customModal2.style.display = "none";
    }
  };

  /////////////////////////////////////////////////////////////////////////////////////////////

  var customModal4 = document.getElementById("customModal4");
  var customImg4 = document.getElementById("customImg4");
  var customModalImg4 = document.getElementById("customModalImg4");
  var customCaption4 = document.getElementById("customCaption4");
  customImg4.onclick = function() {
    customModal4.style.display = "block";
    customModalImg4.src = this.src;
    customCaption4.innerHTML = this.alt;
  };
  var closeCustomModal4 = document.getElementsByClassName("close4")[0];
  closeCustomModal4.onclick = function() {
    customModal4.style.display = "none";
  };
  window.onclick = function(event) {
    if (event.target == customModal4) {
      customModal4.style.display = "none";
    }
  };


  /////////////////////////////////////////////////////////////////////////////////////////////

  var customModal5 = document.getElementById("customModal5");
  var customImg5 = document.getElementById("customImg5");
  var customModalImg5 = document.getElementById("customModalImg5");
  var customCaption5 = document.getElementById("customCaption5");
  customImg5.onclick = function() {
    customModal5.style.display = "block";
    customModalImg5.src = this.src;
    customCaption5.innerHTML = this.alt;
  };
  var closeCustomModal5 = document.getElementsByClassName("close5")[0];
  closeCustomModal5.onclick = function() {
    customModal5.style.display = "none";
  };
  window.onclick = function(event) {
    if (event.target == customModal5) {
      customModal5.style.display = "none";
    }
  };



});





//////////////////////////// ACORDEON

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

////////////   CAMBIAR IMAGEN ///////////

// Cambiar imagen
function cambiarImagen2(rutaImagen) {
  const imagenPrincipal2 = document.getElementById('customImg2');
  imagenPrincipal2.src = rutaImagen;
}