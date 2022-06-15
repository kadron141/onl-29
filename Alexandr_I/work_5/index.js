"use strict"
//Нужно написать функцию cubeSum(n, m), которая будет считать сумму кубических степеней в заданном отрезке чисел, //начиная от меньшего(не включая его), заканчивая большим(включая).
//Первый аргумент функции не обязательно меньший, это нужно учесть.
//Когда номера одинаковые, значит интервал пустое и ожидаемый ответ — 0. Примеры:
//
//cubeSum(2,3); // => 3^3 = 27
//cubeSum(3,2); // => 3^3 = 27
//cubeSum(0,4); // => 1^3+2^3+3^3+4^3 = 100
//cubeSum(17, 14); // => 15^3+16^3+17^3 = 12384
//cubeSum(9, 9); // => 0

function cubeSum(n, m) {
	
	if (n > m) {
		return cubeSumPow(m, n);
	} else if (n < m) {
		return cubeSumPow(n, m);
	}
	
}
function cubeSumPow(a, b) {
	let result = 0;
	for (let i = a + 1; i <= b; i++) {
		result += Math.pow(i, 3);
	}
	return result;
}