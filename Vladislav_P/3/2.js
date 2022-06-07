// Дана строка и буква. Нужно вернуть строку,
//  которая будет содержать все символы, следующие за заданной буквой. Примеры:

// If letter = 'r':
// comes_after("are you really learning Ruby?") # => "eenu"
// comes_after("Katy Perry is on the radio!")   # => "rya"
// comes_after("Pirates say arrrrrrrrr.")       # => "arrrrrrrr"
// comes_after("r8 your friend")                # => "i"



let string = 'are you really learning Ruby?';
let preparedString = string.toLowerCase();
let letter = 'r';
let result ='';


for (let i = 0; i < string.length-1; i++) {
    if (string[i-1] === letter) {
        result += string[i]
    }
}
