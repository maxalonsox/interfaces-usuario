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

document.querySelector("#cerrar-popUpRedes").addEventListener("click", ()=>{
    popUpRedes.close();
});

//POPUP LOADING


document.querySelector("#logo-header").addEventListener("click", PopUpLoading);
document.querySelector('.container-btn-misJuegos').addEventListener('click', PopUpLoading);
document.querySelector('#inicio-breadcrumb').addEventListener('click', PopUpLoading);

function PopUpLoading(){
    let popUpLoading = document.querySelector("#popUpLoading");
    popUpLoading.showModal();
    setTimeout(a, 5000);
    function a(){
        NavigateTo('index.html');
    }
}

function NavigateTo(url){
    location.href = url;
}


