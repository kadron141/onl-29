// 2

// Дана строка и буква. Нужно вернуть строку, которая будет содержать все символы, следующие за заданной буквой. Примеры:

// If letter = 'r':
// comes_after("are you really learning Ruby?") # => "eenu"
// comes_after("Katy Perry is on the radio!")   # => "rya"
// comes_after("Pirates say arrrrrrrrr.")       # => "arrrrrrrr"
// comes_after("r8 your friend")                # => "i"

let string = 'r8 your friend';
let toLowerString = string.toLowerCase();

let letter = 'r';
let newStr = '';

for (let i = 0; i < toLowerString.length; i++) {
    
    if (toLowerString[i] === letter && i + 1 < string.length) {
        newStr += toLowerString[i + 1];
    }
}
console.log(newStr);

// пока не доделал, чуть не понятно как сделать, чтобы не выводило точки, цифры, пробелы. 



function getNextLetter() {

}