
class Board {
    constructor(matriz, posX, posY, width, height, fill, context, modoDeJuego) {
        this.posX = posX;
        this.posY = posY;
        this.fill = fill;
        this.context = context;
        this.width = width;
        this.height = height;
        this.matriz = matriz;
        this.modoDeJuego = modoDeJuego;
        this.ultimaFichaPuesta;
    }

    draw() {
       for (let i = 0; i < this.matriz.length; i++) {
         for (let j = 0; j < this.matriz[i].length; j++) {
            this.matriz[i][j] = new Slot(boardx0 + 50*j, boardy0 + 50*i, 60, 60, "blue", ctx);
            slots.push(this.matriz[i][j]);
            this.matriz[i][j].draw();
         }
       }
    }


    agregarFicha(columna, player) {
        if ((columna < this.modoDeJuego+3) && (player == 1 || player == 2)) {
            let color = "";
            if (player == 1) color = "red";
            else color = "yellow";
            const ficha = new Ficha(this.posX+30+60*columna,this.posY+30+60*5,20,color,this.context, player);
            if (this.matriz[0][columna].getFicha().getPlayer() == 0) {
                let fila = this.buscarFilaLibre(columna);
                this.matriz[fila][columna].setFicha(ficha);
            }
        }
    }

    buscarFilaLibre(columna) {
        let ultimaFilaLibre = 0;
        for (let i = 0; i < this.modoDeJuego+2; i++) {
            if (this.matriz[i][columna].getFicha().getPlayer() == 0) {
                ultimaFilaLibre = i;
            }
        }
        return ultimaFilaLibre;
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }
}