'use strict';


//POPUP USER
let popUpUser = document.querySelector("#popUpUser");

document.querySelector("#btn-user").addEventListener("click", ()=>{
    popUpUser.showModal();
});

document.querySelector("#cerrar-popUpUser").addEventListener("click", ()=>{
    popUpUser.close();
});

//POPUP REDES
let popUpRedes = document.querySelector("#popUpRedes");

document.querySelector("#btn-compartir").addEventListener("click", ()=>{
    popUpRedes.showModal();
});

