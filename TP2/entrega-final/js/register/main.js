'use strict';

let btnRegistrar = document.querySelector("#btn-registrar");
btnRegistrar.addEventListener("click", a);

function a(){
    
    setTimeout(Cambiar, 2000)
    
    function Cambiar(){
        let tick = document.querySelector("#tick");
        tick.classList.add("mostar");
        tick.classList.remove("esconder")
    }
    
    btnRegistrar.classList.add("animacion-register")
    
    setTimeout(a, 2500)
    function a(){
        NavigatotTo('./index.html');
    }
    
}

function NavigatotTo(url){
    location.href = url;
}
