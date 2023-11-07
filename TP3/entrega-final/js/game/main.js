const canvas = document.getElementById("myCanvas");
/** @type {CanvasRenderingContext2D} */
let ctx = canvas.getContext("2d");

const canvasH = 520;
const canvasW = 900;


const modoDeJuego = 4;
const cantFichasTotal = (modoDeJuego+3)*(modoDeJuego+2);

const boardW = (modoDeJuego+3)*50;
const boardH = (modoDeJuego+2)*50;

let boardx0 = canvasW/2 - boardW/2;
let boardy0 = canvasH/2 - boardH/2 + 25;

//seteo variables
const filas = modoDeJuego+2;
const columnas = modoDeJuego+3;

//declaro matriz
const tablero = [];
const slots = [];
for (let i = 0; i < columnas-1; i++) {
    tablero[i] = new Array(filas);
}
//inicializo matriz en 0
for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
        tablero[i][j] = "";
    }
}

const board = new Board(tablero, boardx0,boardy0,boardW,boardH,"blue",ctx, modoDeJuego);
const fichas = [];
const posicionPonerFichas = [];

function inicializeGame() {
    
    pintarFondo();
    
    board.draw();
    
    //pintar cacilleros del board
    pintarEndijas();
    
    //pinta fichas rojas


    let fichaPosY = 505;
    for (let i = 0; i < cantFichasTotal/2; i++) {
        let fichaPosX = 30;
        fichaPosY = fichaPosY - 10;
        const ficha = new Ficha(fichaPosX, fichaPosY, 20, "red", ctx, 1);
        fichas.push(ficha);
        
        
        
        ficha.draw();
    }
    
    //pinta fichas amarillas
    
    fichaPosY = 505;
    for (let i = 0; i < cantFichasTotal/2; i++) {
        let fichaPosX = canvasW - 30;
        fichaPosY = fichaPosY - 10;
        const ficha = new Ficha(fichaPosX, fichaPosY, 20, "yellow", ctx, 2);
        fichas.push(ficha);
        ficha.draw();
    }
}

function pintarFondo(){
    let img = document.querySelector("#fondo-canvas")
    let imgFondo = ctx.createPattern(img, null);
    ctx.rect(0, 0, canvasW, canvasW);
    ctx.fillStyle = imgFondo;
    ctx.fill();
}

function pintarEndijas(){
    for (let i = 0; i < modoDeJuego+3; i++) {
        const slot = new Slot(boardx0 + 50*i, boardy0 - 50, 50, 50, "grey", ctx);
        posicionPonerFichas.push(slot);
        slot.draw();
    }
}

inicializeGame();


function repaint() {
    ctx.clearRect(0,0,canvasW,canvasH);
        pintarFondo();
    board.redraw();
    pintarEndijas();
    for(let i = 0; i < fichas.length; i++) {
        if (fichas[i].getPlayer() == 1) fichas[i].setFill("red");
        else fichas[i].setFill("yellow");
        fichas[i].draw();
    }
    
}

canvas.addEventListener("mousedown", clickEnFicha);
canvas.addEventListener("mouseup", ponerFicha);
canvas.addEventListener("mousemove", moverFicha);

function getMousePos(event){
    return {
        x: Math.round(event.clientX - canvas.offsetLeft),
        y: Math.round(event.clientY - canvas.offsetTop)
    }
}

let fichasPuestas = [];
let ultimaFichaPuesta ;
let fichaClicked;
let click = false;
var inicioX = 0, inicioY = 0;


function clickEnFicha(e) {
    let m = getMousePos(e);
    for (let i = 0; i < fichas.length; i++) {
        if (fichas[i].contienePunto(m.x ,m.y)) {
            if(ultimaFichaPuesta == null || (fichas[i].getPlayer() != ultimaFichaPuesta)){
                fichaClicked = fichas[i];
                inicioY = m.y - fichaClicked.y;
                inicioX = m.x - fichaClicked.x;             
            }
        }
    }
    click = true; 
}

function ponerFicha(e) { 
    let m = getMousePos(e);
    let encontro = false;
    if (fichaClicked != null) {
        for (let i = 0; (i < posicionPonerFichas.length) && fichaClicked != null; i++) {
            if (posicionPonerFichas[i].contienePunto(m.x,m.y)) {
                if(ultimaFichaPuesta == null || (fichaClicked.getPlayer() != ultimaFichaPuesta)){
                    //agrega la ficha al board
                    let columna = i;
                    const fichaAgregada = board.agregarFicha(columna, fichaClicked.getPlayer());
                    
                    //agrega las fichas clickeadas al arreglo de fichas ya puestas en el board
                    fichasPuestas.push(fichaClicked);
                    //setea la ultimaficha puesta en el board
                    ultimaFichaPuesta = fichasPuestas[fichasPuestas.length-1].getPlayer(); 

                    if (fichaAgregada.insertada) {

                        //checkea si hay ganador
                        if (board.hayGanador(fichaClicked, fichaAgregada.fila, columna)){ alert("GANADOR: Jugador " + fichaClicked.getPlayer());}
                    }
                    
                    //toma la posicion la ficha en el arreglo de fichas generales
                    let p = fichas.indexOf(fichaClicked);
                    //borra del arreglo de fichas generales la ficha puesta
                    fichas.splice(p,1);
                    
                    //setea en null y queda lista para ser clickeada la proxima ficha

                    repaint();
                    fichaClicked = null;
                    encontro = true;
                    break;
                }
            }
        }
    }
    click = false;
    
}

function moverFicha(e){
    let m = getMousePos(e);
    if (click != false && fichaClicked != null) {
        fichaClicked.setPosX(m.x);
        fichaClicked.setPosY(m.y);
    }   
    actualizar();
}

function actualizar() {
    if (click != false && fichaClicked != null) {
        fichaClicked.draw();    
        repaint();
    }
}

// CAMBIO DE DIV A CANVAS

let primerPantalla = document.querySelector("#primer-pantalla");
let containerJuego = document.querySelector("#container-juego")

document.getElementById("btn-jugar").addEventListener("click", ()=>{
    setTimeout(a, 1000);
    function a(){
        canvas.classList.remove("esconder");
        containerJuego.classList.add('esconder');
        containerJuego.classList.remove("container-juego")
        primerPantalla.classList.add('esconder');
    }
})
