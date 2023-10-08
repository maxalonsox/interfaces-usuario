'use strict';

let btnRegistrar = document.querySelector("#btn-registrar");
btnRegistrar.addEventListener("click", a);

function a(){
    function Cambiar(){
        let tick = document.querySelector("#tick");
        tick.classList.add("mostar");
        tick.classList.remove("esconder")
    }
    btnRegistrar.classList.add("animacion-register")
    setTimeout(Cambiar, 2000)
    setTimeout(NavigatotToLogin, 2500)
    
}

function NavigatotToLogin(){
    location.href='index.html'
}
