// // Дана строка из двух слов, разделённых пробелом. 
// Нужно вернуть строку, в которой первые буквы слов будут поменяны местами. Пример: 

// // “not picking” ->  “pot nicking”


let string = 'not picking';

let newString = '';

let firstLetter = string[0];

let secondLetter = '';


for (let i = 1; i < string.length; i++) {
    if (string[i-1] === ' ') {
        secondLetter = string[i];
    }
} newString = secondLetter;

for (let i = 1; i < string.length; i++) {
    if (string[i-1] === ' ') {
        newString += firstLetter;
        continue
    } newString += string[i];
} console.log(newString);