const nav = document.getElementById("nav"); // NAV
const title = document.getElementById("title-page"); //header
const goblin = document.getElementById("green-goblin"); //duende verde
const city1 = document.getElementById("city-1"); //ciudad fondo izquierda
const city2 = document.getElementById("city-2"); //ciudad fondo centro
const city3 = document.getElementById("city-3"); //ciudad fondo derecha
const spiderweb1 = document.getElementById("spiderweb-1"); //telaraña izquierda
const spiderweb2 = document.getElementById("spiderweb-2"); //telaraña derecha
const spiderman1 = document.getElementById("spiderman-1"); //spiderman izquierda
const spiderman2 = document.getElementById("spiderman-2"); //spiderman centro
const spiderman3 = document.getElementById("spiderman-3"); //spiderman derecha


window.onscroll = function() {
    let currentScrollPos = window.scrollY;

    // hace que el header suba o baje dependiendo del scroll
    if (currentScrollPos < 200) {
        title.style.top = 91 - currentScrollPos * 0.4 + "px";
    } else {
        title.style.top = "15px";
    }

    // el header se achica o se agrande dependiendo del scroll
    if (currentScrollPos < 200) {
        title.style.width = 590 - currentScrollPos * 2.5 + "px";
    } else {
        title.style.width = "130px";
    }

    // el fondo del nav cambia de color al llegar al fondo violeta
    if (currentScrollPos > 420) {
        nav.style.backgroundColor = "rgba(84, 153, 248, 1)";
    } else {
        nav.style.backgroundColor = "rgba(84, 153, 248, 0)";
    }

    //el duende verde va más lento que el scroll
    goblin.style.marginTop = -87 + currentScrollPos * 0.1 + "px";

    //al top de cada elemento se le suma un porcentaje de la posición del scroll así se genera el efecto parallax
    city1.style.top = 144 + currentScrollPos * 0.4 + "px";
    city2.style.top = 634 + currentScrollPos * 0.5 + "px";
    city3.style.top = 126 + currentScrollPos * 0.4 + "px";
    spiderman1.style.top = 388 + currentScrollPos * 0.12 + "px";
    spiderman2.style.top = 403 + currentScrollPos * 0.03 + "px";
    spiderman3.style.top = 335 + currentScrollPos * 0.08 + "px";
    spiderweb1.style.top = 400 + currentScrollPos * 0.03 + "px";
    spiderweb2.style.top = 340 + currentScrollPos * 0.08 + "px";
}