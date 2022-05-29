/*
Дана строка из двух слов, разделённых пробелом. 
Нужно вернуть строку, в которой первые буквы слов будут поменяны местами.

Пример: 

'not picking' ->  'pot nicking'
*/

let oldString = 'not picking';
let newString = '';

let firstLetter = '';
let secondLetter = oldString[0];

for (let i = 1; i < oldString.length; i++) {
    if (oldString[i - 1] === ' ') {
        firstLetter = oldString[i];
    }
}

newString += firstLetter;

for (let i = 1; i < oldString.length; i++) {
    if (oldString[i - 1] === ' ') {
        newString += secondLetter;
        continue;
    }
    newString += oldString[i];
}

console.log(newString);
