'use strict' 


let a = prompt('Укажите число a', 0);

let b = prompt('Укажите число b', 0);

let c = prompt('Укажите число c', 0);

const X = 2;

let D = b**X - 4*a*c;



if (D == 0) {
    let x = (-b +Math.sqrt(D) )/2*a;
    alert('корень уравнения повторяется и равен '+ x);
} else if (D > 0) {
    let x1 = (-b + Math.sqrt(D) )/2*a;
    let x2 = (-b - Math.sqrt(D) )/2*a;
    alert('уравнение имеет 2 корня')
    alert('корень уравнения: х1 =' + x1)
    alert('корень уравнения: х2 =' + x2)

} else {
    alert('Решений у уравнения - нет')
}


