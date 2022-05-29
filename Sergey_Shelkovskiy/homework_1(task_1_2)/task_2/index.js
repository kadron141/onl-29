'use strict'

let bulletNumber = +prompt('в каком гнезде пуля');
let shotsFired = +prompt('кол-во выстрелов');

if (bulletNumber <=7 && shotsFired <=7 && bulletNumber >0 && shotsFired >0 ){
   let result =true;

for (let i=1;i <= shotsFired;i++) {
 if(i===bulletNumber) {
    console.log('Бах!');
    console.log('Игрок не выжил :(');
    result=false;
    break;
 
 } else{
 console.log('Щёлк');
}
}
if(result){
   console.log('Игрок выжил,Урааа')
}

} else {
   console.log('Ошибка')
}
