// 2. Написать программу “русская рулетка”
// Переменные bulletNumber (в каком гнезде пуля) и shotsFired (кол-во выстрелов) задаются в коде (оба числа не должны быть выше 7, в противном случае выводим сообщение об ошибке). На каждую попытку выстрела должно выводиться сообщение “щёлк”, на успешный выстрел “бах!”. В конце должно вывестись сообщение “игрок выжил” / “игрок не выжил”

"use strict"

let bulletNumber =  +prompt('enter variable bulletNumber');
let shotsFired = +prompt('enter variable shotsFired');

if (bulletNumber || shotsFired <= 7) {
  
  if (bulletNumber > shotsFired) {

      for (let i = 0; i < shotsFired; i++){
        alert('щёлк');  
      }
        alert('игрок выжил');

   } else if (bulletNumber <= shotsFired) {
    for (let i = 0; i < bulletNumber; i++){
       alert('щёлк'); 
    }  
      alert('игрок не выжил');
     
  }

} else {
  alert ('Вы ввели слишком большое число');
}