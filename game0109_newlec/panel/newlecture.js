// let year = 2023;
// let month = 1;
// let day = 4;

// // ES5 방식
// let regdate = year + "-" + month + "-" + day;
// console.log(regdate);

// // ES6 방식
// let template = '${year}-${month}-${day}';

// let className = 'p-elect';
// let title = '스마트 폰'

// let product = String.raw`<section class=${className}>\n\n\n
//                     <h1>${title}</h1>
//                     </section>`;

// console.log(product);

// let attName = "kor"

// let exam = {
//     [attName]: 10,
//     eng: 20,
//     math: 30,
//     student: {
//         name: 'newlec',
//         phone: '010-2222-3333'
//     }
// };

// console.log(`kor:${exam.kor}`);

// let { kor, eng: english, ma = 0, student: { name, phone } } = exam;

// console.log(kor);
// console.log(english);
// console.log(phone);
// // dragon 뭐야??

// let std1 = {name:"dragon", phone:'0000'};
// ({name, phone} = std1);


// let kors = [1,2,3];
// let [kor1,kor2,ko3] = kors;


// [kor2,kor1,kor3] = [kor1,kor2,ko3]
// console.log(kor1);

// // 값 바꾸기 => 반전 등에 사용
// let a,b;
// [a,b] = kors;
// console.log(a);
// [a,b] = [b,a];
// console.log(a);

// let nums = [1,2,3,4,5,6,7,8,9];
// let [n1,n2,...dd] = nums;
// console.log(dd);

// // 중복값 제거에 사용
// let set = new Set([3,4,5,6,8,5,4,2,24,123,5,6,8,9,6,56,43,]);
// set.add(5);
// set.add('5');
// set.add(2);
// set.add(3);

// console.log(`size : ${set.size}`)
// for(let n of set)
//     console.log(n)
// console.log(set.has(3))

// console.log("forEach")

// set.forEach((v)=>{
//     console.log(v);
// })

// console.log("forEach -> key,value)")
// set.forEach((v,k)=>{
//     console.log(`key :${k}, value:${v}`);
// })

// let map = new Map();
// map.set("id", 123);
// map.set("title", "for what??");

// map.forEach((v,k)=>{
//     console.log(`key :${k}, value:${v}`);
// })

// let [tt,yy] = map;
// console.log(`key11 :${tt}, value:${yy}`);

// let notice = new Map();

// notice.set("id", 123);
// notice.set("title","sizepark");
// notice.set("writer","newlec");

// console.log(notice.get("title"));

// console.log(notice);


// for(let [k,v] of notice.entries())
//     console.log(`notice key :${k}, value:${v}`);

// for(let n of notice)
//     console.log(`n = ${n[0]}`)

// let vv = {
//     a:10,
//     b:20,
//     c:30
// }
// for(let v of Object.entries(vv))
//     console.log(v);

// for(let [k,v] of Object.entries(vv))
//     console.log(`vv key :${k}, value:${v}`);


// let list = [

//     {id:1, title:"jsp is...", wId:"newLec"},
//     {id:2, title:"jspaaaaa is...", wId:"newLec"},
//     {id:3, title:"jspvvvvvvvvv is...", wId:"newLec"},
// ]    

// // let ar = list.map((n)=>{return })s