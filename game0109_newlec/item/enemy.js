export default class Enemy{

    constructor(x,y){
        this.img = document.querySelector('#enemy')
        this.x = x || 350;
        this.y = y || 10;

        this.sw = 48;
        this.sh = 64;

    }
    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.sw, this.sh);
        
    }

    update(){


    }
}