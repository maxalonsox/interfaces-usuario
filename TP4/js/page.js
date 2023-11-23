'Use strict'

const btnMenu = document.getElementById("btn-menu");
const menu = document.getElementById("menu");
const spideyWhite = document.querySelector(".spidey-white-more");
const spideyRed = document.querySelector(".spidey-red-more");
const spideyBlack = document.querySelector(".spidey-black-more");
const spiders = [spideyBlack, spideyRed, spideyWhite]; 
let bgMoreFriends = document.querySelector(".bg3-more-friends");
let borderBgMoreFriends = document.querySelector(".border-bg-more-friends");

spideyWhite.addEventListener("mouseover", () => {
    addClassSpidey(spideyWhite);
});

spideyRed.addEventListener("mouseover", () => {
    addClassSpidey(spideyRed);
});

spideyBlack.addEventListener("mouseover", () => {
    addClassSpidey(spideyBlack);
});

spideyWhite.addEventListener("mouseout", removeClassSpidey);
spideyRed.addEventListener("mouseout", removeClassSpidey);
spideyBlack.addEventListener("mouseout", removeClassSpidey);
  
// funcion para sacarle la clase spidey-small y poner el bg-color default cuando sale del hover
function removeClassSpidey(){
    spiders.forEach((s) => {
        s.classList.remove("spidey-small");
    });
    bgMoreFriends.style.backgroundColor = '#ffffff'
    borderBgMoreFriends.style.backgroundColor = 'ffffff'
};

// funcion para agregar la clases al spider que se le hizo hover 
const addClassSpidey = (spider) => {

    // le agrega la clase spidey-small a todos menos al que se pasa por parametro
    spiders.forEach((s) => {
        if(s != spider){
            s.classList.add("spidey-small");
        }
    });

    // cambia el bg-color segun el spidey que le hacen hover
    switch (spider) {
        case spideyWhite:
            bgMoreFriends.style.backgroundColor = '#FFD3F0';
            borderBgMoreFriends.style.backgroundColor = 'C92B94'
        break;
        case spideyRed:
            bgMoreFriends.style.backgroundColor = '#D1DEFF';
            borderBgMoreFriends.style.backgroundColor = '3D6CE7'
        break;
        case spideyBlack:
            bgMoreFriends.style.backgroundColor = '#D1D1D1';
            borderBgMoreFriends.style.backgroundColor = '304C71'
        break;
    }
};

// cuando el botón de menú es clickeado agrega o quita la clase 'active' al botón y al menú desplegable
btnMenu.addEventListener('click', () => {
    if (btnMenu.classList.contains('active')) {
        btnMenu.classList.remove('active');
        menu.classList.remove('active');
    } else {
        btnMenu.classList.add('active');
        menu.classList.add('active');
    }
});

card1.addEventListener('mouseover', () => {
    card2.style.scale = "0.5";
    card3.style.scale = "0.5";
});

card1.addEventListener('mouseout', () => {
    card2.style.scale = "1";
    card3.style.scale = "1";
});

card2.addEventListener('mouseover', () => {
    card1.style.scale = "0.5";
    card3.style.scale = "0.5";
});

card2.addEventListener('mouseout', () => {
    card1.style.scale = "1";
    card3.style.scale = "1";
});

card3.addEventListener('mouseover', () => {
    card1.style.scale = "0.5";
    card2.style.scale = "0.5";
});

card3.addEventListener('mouseout', () => {
    card1.style.scale = "1";
    card2.style.scale = "1";
});