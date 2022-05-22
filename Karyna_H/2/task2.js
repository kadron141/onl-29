"use strict"

const bulletNumber = 7;
const shotsFired = 6;
let isAlive = true;

if (bulletNumber > 7 || shotsFired > 7) {
    console.log('ошибка');
} else {
    for(let i = 1; i < shotsFired + 1; i++) {
        console.log('щелк');

        if (i === bulletNumber) {
            console.log('бах')
            isAlive = false;
            break;
        }
    }

    if (isAlive === true) {
        console.log('игрок выжил');
    } else {
        console.log('игрок не выжил');
    }
}