$(document).ready(function(){
    // Mostrar el menú en la versión mobile
    const btnMenu = document.querySelector('#btnMenu');
    const menu = document.querySelector('#menu');
    const mainNav = document.querySelector('#main-nav');

    btnMenu.addEventListener("click", function(){
        menu.classList.toggle("mostrar");
        mainNav.classList.toggle("fixed");
    });

    // Mostrar el submenú
    const subMenuBtn = document.querySelectorAll('.submenu-btn');

    for(let i=0; i<subMenuBtn.length; i++) {
        subMenuBtn[i].addEventListener("click", function(){
            if(window.innerWidth < 1024){
                const subMenu = this.nextElementSibling;
                const height = subMenu.scrollHeight;
                if(subMenu.classList.contains("desplegar")){
                    subMenu.classList.remove("desplegar");
                    subMenu.removeAttribute("style");
                } else {
                    subMenu.classList.add("desplegar");
                    subMenu.style.height = height + "px";
                }
            }
        });
    };
});