export default class BackGround{
    constructor(){
        this.img = document.querySelector('#bg');

        this.sw = 1024;
        this.sh = 768;

        this.cx =  0;
        this.cy =  0; 
        this.cw = 1024;
        this.ch = 768;

    }
    update(){

    }

    draw(ctx){
        ctx.drawImage(this.img, this.cx, this.cy);
    }
}