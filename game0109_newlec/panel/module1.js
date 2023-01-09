export default function test(){
    console.log("module1위에 test일")
}

export function test1(){
    console.log("module1아래 test1이")
}

export function test2(){

    console.log("아무고또");
}

export class Exam{
    constructor(){
        this.kor = 3;
        this.eng =4;
        this.math = 5;
    }
}

export let exam1 = new Exam();