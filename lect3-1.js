/*
arthemetic operators
*/

let a = 16;
let b = 8;
let sum = a + b;
let sub = a - b;
let mul = a * b;
let div = a / b;
let mod = a % b;
let exp = a ** b;
console.log(sum);
console.log(sub);
console.log(mul);
console.log(div);
console.log(mod);
console.log(exp);

/*
relational operators
*/
console.log(9 > 10 || 10 < 6);
console.log(9 > 10 && 10 < 6);
console.log(!(9 > 10));

/*
assignment operators
*/
var c = 10;

console.log((c += 1));
console.log((c -= 1));
console.log((c *= 2));
console.log((c /= 5));

/*
string
*/
let e = 10;
console.log("ten = " + e);

/*
ternery operator
*/

const d = 10 > 5 ? "true" : "false";

console.log(d);

/*
pop-ups
*/
// let f =  ()=> {
//   if (window.confirm("hello")) {
//     let p1 = document.querySelector("#p1");
//     for (let i = 0; i < 5; i++) {
//       p1.append('hello ');
//     }
//   }
// };

// f();

// let g = ()=>{
//     if(window.confirm("of or cancel")){
//         let p2 = document.querySelector("#p2");
//         p2.append("kovvuri");
//     }
//     else{
//         p2.innerHTML = "sudharshan"
//     }
// }

// g();
let p2 = document.querySelector("#p2");

let g= prompt("whats your name")

let  f = ()=>{
    if(g.toLowerCase = 'sudharshan'){
        p2.innerHTML='19';
    }
    else if(!g){
        p2.innerHTML='you cancled'
    }
}
f();
