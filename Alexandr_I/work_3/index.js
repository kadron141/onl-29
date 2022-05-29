"use strict"


//Дана строка из двух слов, разделённых пробелом.
//Нужно вернуть строку, в которой первые буквы слов будут поменяны местами.
//Пример:
//“not picking” ->  “pot nicking”


function changeLetters(text) {
	let result = '';

	for (let i = 0; i < text.length; i++) {
		if (text[i] === ' ') {
			return result = text[i + 1] + text.substring(1, i) + ' ' + text[0] + text.substring(i + 2);
		}
	}

}