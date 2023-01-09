export default class Boy{

    #speed

    constructor(x,y){
    // about source image
    this.ix = 1;
    this.iy = 2;
    this.sw = 106;
    this.sh = 149.25;

    // about canvas x,y
    this.cx = x || 150;
    this.cy = y || 150; 
    this.cw = this.sw;
    this.ch = this.sh;
    // char move
    this.vx = 0;
    this.vy = 0;
    this.dx = 0;
    this.dy = 0;
    
    this.img=document.querySelector('#boy')
    this.time = 0;
    this.walkDdelay = 10;

    this.moveLeft = false;
    this.moveRight = false;
    this.moveUp = false;
    this.moveDown = false;

    this.dir = 0;
    this.stop = this.stop.bind(this);

    this.#speed = 3;
    }

    // set speed(value){
    //     this.#speed = value;
    // }
    // get speed(){
    //     return this.#speed;
    // }

    setSpeed(value){
        this.#speed = value;
    }
    getSpeed(){
        return this.#speed;
    }


    //원하는 그림 자르기
    draw(ctx){
        this.sx = this.ix*this.sw;
        this.sy = this.iy*this.sh
        ctx.drawImage(this.img, this.sx,this.sy,this.sw,this.sh,
            this.cx-this.sw/2-3, this.cy-this.sh+15,this.cw, this.ch);
    }
    // 객체 이동
    move(dir){
        
        switch(dir){
            case 1:
                this.moveUp = true;
                break;
            case 3:
                this.moveDown = true;
                break;
            case 2:
                this.moveRight = true;
                break;
            case 4:
                this.moveLeft = true;
               break;
        
       }
    }

    stop(dir){
        switch(dir){
            case 1:
                this.moveUp = false;
                break;
            case 3:
                this.moveDown = false;
                break;
            case 2:
                this.moveRight = false;
                break;
            case 4:
                this.moveLeft = false;
               break;
        
        }
    }


    update(){

        // 방향키로 이동
        if(this.moveUp){
             this.cy-= this.#speed;
        }
        if(this.moveDown)
            this.cy +=this.#speed;
        if(this.moveLeft)
            this.cx -= this.#speed;
        if(this.moveRight)
            this.cx +=this.#speed;


        //목적지에 이르면 벡터 0값으로
        if((this.dx-1 < this.cx && this.dx+1 > this.cx)  
            && (this.dy -1 < this.cy && this.dy +1 > this.cy)
            ){
                this.vx = 0;
                this.vy = 0;
                // this.ix = 1;
            }

        //벡터가 0이면 반환
        // 움직임인 아무것도 없으면 실행하는 코드
        if(!(this.moveLeft||this.moveRight||this.moveUp||this.moveDown||false))
            if(this.vx == 0 && this.vy ==0){
                this.ix = 1;
                return;
            }

        
        this.cx += this.vx;
        this.cy += this.vy;        
        
        this.walkDdelay--;
        if(this.walkDdelay ==0)
        {
            this.ix = (this.ix ==0)? 2:0;
            this.walkDdelay = 10;    
        }
    }

    moveTo(dx,dy){
            
        this.dx = dx;
        this.dy = dy;

        var w = dx - this.cx;
        var h = dy - this.cy;
        var d = Math.sqrt(w*w+h*h);
        this.vx = w/d;
        this.vy = h/d;
    }

}
