'use strict'

let bulletNumber = +prompt ('укажите ячейку для пули, не должна быть >7 & !=0');


if ((bulletNumber>7) || (bulletNumber==0)) {
    alert('введенное число не соответсвует условиям');
}


let shotsFired = +prompt ('укажите количество выстрелов, не должно быть >7 & !=0');

if ((shotsFired>7) || (shotsFired==0)) {
    alert('введенное число не соответсвует условиям');
}


for ( let i=1; i <= shotsFired; i++) {
    if (i===bulletNumber) {
        alert('бах');
        alert('игрок не выжил');
        break
    }
    else {
        alert('щёлк');
    }
    console.log(i);
             
}

if (bulletNumber>shotsFired)
{
    alert('игрок выжил');
}