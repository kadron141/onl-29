/*
Дана строка и буква. 
Нужно вернуть строку, которая будет содержать все символы, следующие за заданной буквой. 
Примеры:

If letter = 'r':
comes_after("are you really learning Ruby?") # => "eenu"
comes_after("Katy Perry is on the radio!")   # => "rya"
comes_after("Pirates say arrrrrrrrr.")       # => "arrrrrrrr"
comes_after("r8 your friend")                # => "i"
*/

function comes_after(sentence) {

    let letter = 'r';
    letter.toLowerCase();
    sentence = sentence.replace(/[^a-zа-яё\s]/gi, '').toLowerCase();

    let result = '';

    if (sentence[0] === letter && sentence[1] !== ' ') {
        result += sentence[1];
    }

    for (let i = 1; i < sentence.length; i++) {

        if (sentence[i - 1] === letter && sentence[i] !== ' ') {
            result += sentence[i];
        }

    }

    console.log(result);
}

comes_after("are you really learning Ruby?");
comes_after("Katy Perry is on the radio!");
comes_after("Pirates say arrrrrrrrr.");
comes_after("r8 your friend");