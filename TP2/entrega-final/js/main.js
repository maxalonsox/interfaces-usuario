'use strict';

let popUpRedes = document.querySelector("#popUpRedes");
document.querySelector("#btn-compartir").addEventListener("click", ()=>{
    popUpRedes.showModal();
});

document.querySelector("#cerrar-popUpRedes").addEventListener("click", ()=>{
    popUpRedes.close();
});
