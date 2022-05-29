"use strict"


//Дана строка и буква. Нужно вернуть строку, которая будет содержать все символы, следующие за заданной буквой. Примеры:
//
//If letter = 'r':
//comes_after("are you really learning Ruby?") # => "eenu"
//comes_after("Katy Perry is on the radio!")   # => "rya"
//comes_after("Pirates say arrrrrrrrr.")       # => "arrrrrrrr"
//comes_after("r8 your friend")                # => "i"

function letterAfter(text) {
	const preparedText = text.toLowerCase();
	let result = '';
	let letter = 'r';
	for (let i = 0; i < preparedText.length-1; i++) {
		if (preparedText[i] === letter) {
			result += preparedText[i + 1];
		}
	}
	return result;
}