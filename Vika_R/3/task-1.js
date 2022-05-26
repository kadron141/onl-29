/*
Дана строка из двух слов, разделённых пробелом. 
Нужно вернуть строку, в которой первые буквы слов будут поменяны местами.

Пример: 

'not picking' ->  'pot nicking'
*/

let old_string = 'not picking';
let new_string = '';

let first_letter = '';
let second_letter = old_string[0];

for (let i = 1; i < old_string.length; i++) {
    if (old_string[i - 1] === ' ') {
        first_letter = old_string[i];
    }
}

new_string += first_letter;

for (let i = 1; i < old_string.length; i++) {
    if (old_string[i - 1] === ' ') {
        new_string += second_letter;
        continue;
    }
    new_string += old_string[i];
}

console.log(new_string);
