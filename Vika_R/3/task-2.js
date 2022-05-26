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
    sentence = sentence.replace(/[^a-zа-яё\s]/gi, '');
    let sentence_toLowerCase = '';
    let result = '';

    for (let i = 0; i < sentence.length; i++) {

        sentence_toLowerCase += sentence[i].toLowerCase();

    }

    for (let i = 0; i < sentence_toLowerCase.length; i++) {

        if (sentence_toLowerCase[i - 1] === letter.toLowerCase() && sentence_toLowerCase[i]!== ' ') {
            result += sentence_toLowerCase[i];
        }

    }

    console.log(result);
}

comes_after("are you really learning Ruby?");
comes_after("Katy Perry is on the radio!");
comes_after("Pirates say arrrrrrrrr.");
comes_after("r8 your friend");