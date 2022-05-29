/* Дана строка и буква. Нужно вернуть строку, которая будет содержать
все символы, следующие за заданной буквой. Примеры:

If letter = 'r':
comes_after("are you really learning Ruby?") # => "eenu"
comes_after("Katy Perry is on the radio!")   # => "rya"
comes_after("Pirates say arrrrrrrrr.")       # => "arrrrrrrr"
comes_after("r8 your friend")                # => "i" */

testStr = 'are you really learning Ruby?';
let c = 'r';

function comesAfter(str, letter) {
    let result = '';

    str = str.toLowerCase();
    letter = letter.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        if (i === str.length - 1) {
            return result;
        }
        if (str[i] === letter) {
            result += str[i + 1];
        }
    }

    return result;
}

console.log(comesAfter(testStr, c));