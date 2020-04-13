// Задания по теме "Генераторы и Итераторы"

// Задача 23

// Любая строка
let string = 'javascript'

// Функция с приминением spread к получаемой строке
function reverseString([...string]){
	// С использованием методов reserve и join
	return string.reverse().join('');
	
	// Перебором символов и без использования методов
	/*
	let reversed_string = '';
	for (let symbol of string){
		reversed_string = symbol + reversed_string;
	}
	return reversed_string;
	*/
};

// Вывод результата
console.log(reverseString(string));