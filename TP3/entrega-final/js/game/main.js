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
let boardy0 = canvasH/2 - boardH/2;

if (modoDeJuego == 7) {
    boardy0 = boardy0 + 20;
}

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

function getMousePos(event){
    return {
        x: Math.round(event.clientX - canvas.offsetLeft),
        y: Math.round(event.clientY - canvas.offsetTop)
    }
}

function inicializeGame() {
    board.draw();

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

inicializeGame();

function repaint() {
    ctx.clearRect(0,0,canvasW,canvasH);
    board.draw();
    for(let i = 0; i < fichas.length; i++) {
        if (fichas[i].getPlayer() == 1) fichas[i].setFill("red");
        else fichas[i].setFill("yellow");
        fichas[i].draw();
    }
    fichaClicked = null;
}

canvas.addEventListener("mousedown", clickEnFicha);
canvas.addEventListener("mouseup", ponerFicha);

let fichasPuestas = [];
let ultimaFichaClicked ;
let fichaClicked;

function clickEnFicha(e) {
    let m = getMousePos(e);
    for (let i = 0; i < fichas.length; i++) {
        if (fichas[i].contienePunto(m.x ,m.y)) {
            fichaClicked = fichas[i];
        }
    }
}

function ponerFicha(e) { 
    let m = getMousePos(e);
    if (fichaClicked != null) {
        for (let i = 0; i < posicionPonerFichas.length; i++) {
            if (((m.x >= posicionPonerFichas[i].getPosX()) && (m.x < (posicionPonerFichas[i].getPosX() + posicionPonerFichas[i].getWidth()))) && (m.y >= posicionPonerFichas[i].getPosY()) && (m.y < (posicionPonerFichas[i].getPosY() + posicionPonerFichas[i].getHeight()))) {
                if(ultimaFichaClicked == null || (fichaClicked.getPlayer() != ultimaFichaClicked.getPlayer())){
                    let columna = i;
                    board.agregarFicha(columna, fichaClicked.getPlayer());
                    fichasPuestas.push(fichaClicked);
                    ultimaFichaClicked = fichasPuestas[fichasPuestas.length-1]; 
                    fichaClicked = null;
                }
                
            }
        }
    }
}

//ARREGLO PARA PONER FICHAS

const posicionPonerFichas = [];

for (let i = 0; i < modoDeJuego+3; i++) {
    const slot = new Slot(boardx0 + 50*i, boardy0 - 60, 60, 60, "grey", ctx);
    posicionPonerFichas.push(slot);
    slot.draw();
}

console.log(tablero);

// LOGICA PARA VERIFICAR GANADOR

// verificarGanador(){
    
// }