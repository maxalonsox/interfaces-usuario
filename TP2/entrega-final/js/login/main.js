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
    
    setTimeout(a, 5000);
    function a(){
        NavigatotTo('home.html')
    }
}   

function NavigatotTo(url){
    location.href = url
}