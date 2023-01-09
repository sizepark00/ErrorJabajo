import GameCanvas from './panel/game-canvas.js';
window.addEventListener("load", function(){

    var gamecanvas = new GameCanvas();
    gamecanvas.run()

    // console.log(aa);
    // var window = new Window();
    
    // class Window{
    //     constructor(){
    //         this.x;
    //         this.y;


    //     }
    //     setTimeout(f1, second){
    //         x = f1;
    //     }   
    


    // var canvas = this.document.querySelector(".game-canvas");
    // /**@type {CanvasRenderingContext2D} */
    // var ctx = canvas.getContext('2d');
    // // canvas 배경 넣기
    // ctx.fillStyle = " rgb(190,190,220)"
    // ctx.fillRect(0,0,700,700);
    

    // //DOM에서 canvas객체를 클릭할때 그림이 나온다.
    // var img = new Image();
    // img.src = "./image/boy.png";
    // canvas.onclick = function(){
    //     ctx.drawImage(img, 100, 100);
    // };


});
