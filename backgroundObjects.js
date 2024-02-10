export class Mass{
    constructor(canvasWidth, canvasHeight){
        this.randomNum = Math.random();
        this.randomNumTwo = Math.random();
        this.x = canvasWidth * this.randomNum;
        this.y = canvasHeight * this.randomNumTwo;
        this.width = 200 * this.randomNum;
        this.height = 200 * this.randomNum;
        this.speed = 1.75 * this.randomNum;
        this.directionX = false;
        this.directionY = false;
        this.canWidth = canvasWidth;
        this.canHeight = canvasHeight;
    }
    update(){
        if (this.directionX){
            this.x += this.speed;
        } else {
            this.x -= this.speed;
        }

        if (this.directionY){
            this.y += this.speed;
        } else {
            this.y -= this.speed;
        }

        if (this.y + this.height >= this.canHeight){
            this.directionY = false;
        }
        if (this.y <= 0){
            this.directionY = true;
        }

        if (this.x + this.width >= this.canWidth){
            this.directionX = false;
        }
        if (this.x <= 0){
            this.directionX = true;
        }
    }
    draw(context){
        context.fillStyle = 'rgb(40, 40, 40)';
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}