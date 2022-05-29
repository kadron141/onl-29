'use strict'

let a = +prompt('a');
let b = +prompt('b');
let c = +prompt('c');
let D = b**2 - 4*a*c;
let x1;
let x2;


let x;

if  (D===0) {
   x= ( (-b) / (2*a) );
   console.log('корень уравнения повторяется и равен = ' + x)

}   else if(D>0) {
   x1= (-b+Math.sqrt(D))/(2*a);
   x2= (-b-Math.sqrt(D))/(2*a);
   console.log('корень уравнения x1 = ' + x1,
                ' , корень уравниния x2 = ' + x2);
               
  } else {
   console.log('у уравнения нет корней', ', так как дискриминант = ' + D);
}










