'use strict'

let bulletNumber = 5

if (bulletNumber > 7) {
    alert('Условие не выполнено, попробуйте еще раз, число не должно быть больше >7')
}



let shotsFired = prompt('Укажите кол-во выстрелов, <7', 0);

if (shotsFired == bulletNumber) {
    alert('бах')
    alert('игрок не выжил')
} else {
    alert('щелк')
    alert('игрок выжил')
}