'use strict';

let btnRegistrar = document.querySelector("#btn-registrar");
btnRegistrar.addEventListener("click", CambiarALoading);

function CambiarALoading(){

    let container = document.querySelector("#container-register");
    container.classList.remove('container-login');
    container.classList.add('esconder');
    
    let containerLoading = document.querySelector("#a");
    containerLoading.classList.remove('esconder');
    containerLoading.classList.add('container-loading');
    
    setTimeout(NavigateTo, 5000);
}   

function NavigateTo(url){
    location.href = './home.html';
}
