"use strict";

$(document).ready(function () {
  // Mostrar el menú en la versión mobile
  var btnMenu = document.querySelector('#btnMenu');
  var menu = document.querySelector('#menu');
  var mainNav = document.querySelector('#main-nav');
  var footer = document.querySelector('#footer');
  var seccionPrincipal = document.querySelector('#seccion-principal');
  btnMenu.addEventListener("click", function () {
    menu.classList.toggle("mostrar");
    mainNav.classList.toggle("fixed");
    footer.classList.toggle("ocultar");
    seccionPrincipal.classList.toggle("ocultar");
  }); // Mostrar el submenú

  var subMenuBtn = document.querySelectorAll('.submenu-btn');

  for (var i = 0; i < subMenuBtn.length; i++) {
    subMenuBtn[i].addEventListener("click", function () {
      if (window.innerWidth < 1024) {
        var subMenu = this.nextElementSibling;
        var height = subMenu.scrollHeight;

        if (subMenu.classList.contains("desplegar")) {
          subMenu.classList.remove("desplegar");
          subMenu.removeAttribute("style");
        } else {
          subMenu.classList.add("desplegar");
          subMenu.style.height = height + "px";
        }
      }
    });
  }

  ;
});