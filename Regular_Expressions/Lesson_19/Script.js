// Тема 19
document.write("Тема 19<br>");

// Задача 2
document.write("Задача 2: ");
let string = "a1b c34d x567z";
let digits_array = string.match(/\d/g);
let sum = 0;
for (digit of digits_array){
	sum += Number(digit);
}

document.write(sum);

/*
Также сумму можно посчитать через
let sum = digits_array.reduce((sum,value) => Number(sum) + Number(value));
*/