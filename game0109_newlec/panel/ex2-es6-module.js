// import aaa from '../panel/module1.js';
import aaa,{test1, test2, Exam, exam1} from '../panel/module1.js';
import bbb,{test1 as test4} from '../panel/module2.js'

aaa();
test1();
test2();
let exam1 = new Exam();
console.log(exam1)
console.log(exam2)
bbb();
test4();
