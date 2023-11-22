'Use strict'

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

