'use strict'

let btnLogin = document.querySelector("#btn-login");
btnLogin.addEventListener("click", CambiarALoading);

function CambiarALoading(){

    let container = document.querySelector("#container-login");
    container.classList.remove('container-login');
    container.classList.add('esconder');
    
    let containerLoading = document.querySelector("#a");
    containerLoading.classList.remove('esconder');
    containerLoading.classList.add('container-loading');
    setTimeout(NavigatotToGame, 5010)
    
}   

function NavigatotToGame(){
    location.href='game.html'
}