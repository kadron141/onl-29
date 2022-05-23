// Написать программу “русская рулетка”
// Переменные bulletNumber (в каком гнезде пуля) и shotsFired (кол-во выстрелов) задаются в коде (оба числа не должны быть выше 7, в противном случае выводим сообщение об ошибке). На каждую попытку выстрела должно выводиться сообщение “щёлк”, на успешный выстрел “бах!”. В конце должно вывестись сообщение “игрок выжил” / “игрок не выжил”
"use strict";

let bulletNumber = 9;
let shotsFired = 6;
if (
  bulletNumber > 7 ||
  shotsFired > 7 ||
  bulletNumber <= 0 ||
  shotsFired <= 0
) {
  alert("Ошибка! Числа выходят за границы");
} else {
  for (let i = 1; i <= shotsFired; i++) {
    if (i == bulletNumber) {
      console.log("бах!");
      alert("Вы не выжили");
      break;
    } else {
      console.log("щёлк");
    }
  }
  if (bulletNumber > shotsFired) {
    alert("Вы выжили");
  }
}
