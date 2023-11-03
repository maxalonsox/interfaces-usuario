class Figure {
    constructor(posX, posY, fill, context) {
        this.posX = posX;
        this.posY = posY;
        this.fill = fill;
        this.context = context;
    }

    setFill(fill) {
        this.fill = fill;
    }

    getPosX() {
        return this.posX;
    }

    getPosY() {
        return this.posY;
    }

    getPosition() {
        return {
            x: this.getPosX(),
            y: this.getPosY()
        };
    }

    setPosition(posX, posY) {
        this.posX = posX;
        this.posY = posY;
    }

    getFill() {
        return this.fill;
    }

    draw() {
        this.context.fillStyle = this.fill;
    }
}