class Ficha extends Circle {
    constructor(posX, posY, radius, fill, context, player) {
        super(posX, posY, radius, fill, context);
        this.player = player;
    }

    draw() {
        super.draw();
        
    }

    getPlayer() {
        return this.player;
    }

    setPlayer(player) {
        this.player = player;
    }

    contienePunto(x, y) {
        const distanciaAlCentro = Math.sqrt(Math.pow(x - this.posX, 2) + Math.pow(y - this.posY, 2));
        return distanciaAlCentro <= this.radius;
    }

    delete() {
        this.posX = -100;
        this.posY = -100;
    }
}