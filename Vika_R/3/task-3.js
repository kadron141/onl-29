/*
Нужно написать функцию cubeSum(n, m), 
которая будет считать сумму кубических степеней в заданном отрезке чисел, 
начиная от меньшего (не включая его), заканчивая большим (включая). 
Первый аргумент функции не обязательно меньший, это нужно учесть. 
Когда номера одинаковые, значит интервал пустое и ожидаемый ответ — 0. 
Примеры:

cubeSum(2,3); // => 3^3 = 27
cubeSum(3,2); // => 3^3 = 27
cubeSum(0,4); // => 1^3+2^3+3^3+4^3 = 100
cubeSum(17, 14); // => 15^3+16^3+17^3 = 12384
cubeSum(9, 9); // => 0
*/

function operateVariables(first,last){
    let result = 0;
    for (let i = first + 1; i <= last; i++) {
        result += i * i * i;
    }
    return result;
}

function cubeSum(n, m) {
    let result = 0;
    if (n > m) {
        result = operateVariables(m,n);
        console.log(result);

    } else if (n < m) {
        result = operateVariables(n,m);
        console.log(result);

    } else if (n === m) {
        console.log(result);
    }

}

cubeSum(2, 3);
cubeSum(3, 2);
cubeSum(0, 4);
cubeSum(17, 14);
cubeSum(9, 9);
