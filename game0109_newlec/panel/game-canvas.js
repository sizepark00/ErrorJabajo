import Boy from '../item/boy.js';
import Enemy from '../item/enemy.js';
import BackGround from '../item/backgound.js';

export default class GameCanvas{

    constructor(){
    /**@type {CanvasRenderingContext2D} */
    this.dom = document.querySelector(".game-canvas");
    this.dom.focus();
    this.ctx = this.dom.getContext('2d');

    // this.ctx.fillStyle = " rgb(190,190,220)"
    // this.ctx.fillRect(0,0,700,700);
    
    //--------------해석: this 클래스에 있는 함수이긴 한데 사용할 
    //------------------ 객체에 따라서 this.가 달라진다.
    this.dom.onclick = this.clickHandler.bind(this);
    this.dom.onkeydown = this.keyDownHandler.bind(this);
    this.dom.onkeyup = this.keyUpHandler.bind(this)
    
    // this.pause = false;
    this.player = 1;
    this.boy = new Boy(100,100);
    this.enemy = new Enemy();

    this.bg = new BackGround();

    // this.boy.#speed++;

    this.boy.setSpeed(this.boy.getSpeed() +2);
    console.log(`speed = ${this.boy.getSpeed()}`)

    }

    //실행
    run(){
        // console.log("a")
        // console.log(this.run);
        // if(this.puase)
        //     return "12";
        
        
        this.update();
        this.draw();

        window.setTimeout(function(){
            this.run();
        }.bind(this), 16)

    }

    update(){
        // if(this.player > 0)
        this.boy.update();
        this.enemy.update();
        // else if(this.player < 0)
        //     this.boy1.update();
        
    }

    draw(){
    
        this.bg.draw(this.ctx);
        this.boy.draw(this.ctx);
        this.enemy.draw(this.ctx)
        // this.boy1.draw(this.ctx);
       
    }
    clickHandler(e){
        // this.pause = true;
        console.log(this)
        // this.boy.draw(this.ctx);
        this.boy.moveTo(e.x, e.y)
        // this.boy1.moveTo(e.x, e.y)
        // this.player *= -1;
        // this.player *= -1;
        
        // this.boy.move(2);
        // this.mo
    }
    keyDownHandler(e){
        console.log(e.key);
        
        switch(e.key){
            case "ArrowUp":
                this.boy.move(1);
                break;
            case "ArrowRight":
                this.boy.move(2);
                break;
            case "ArrowDown":
                this.boy.move(3);
                break;
            case "ArrowLeft":
                this.boy.move(4);
                break;
            default:
                break;
        }
    }

    keyUpHandler(e){
        console.log(e.key);
        // this.boy.move(0);
        switch(e.key){
            case "ArrowUp":
                console.log("이거?")
                this.boy.stop(1);
                break;
            case "ArrowRight":
                this.boy.stop(2);
                break;
            case "ArrowDown":
                this.boy.stop(3);
                break;
            case "ArrowLeft":
                this.boy.stop(4);
                break;
            
        }

    }

}
