// Задачи по теме "тип Symbol"

// Задача 6

// Создание глобального символа, который будет ключом для функции во всех массивах
let elems_sum = Symbol.for('elems_sum');

// Функция возвращающая массив с 10 случайными числами от 1 до 10
function returnRandomArray(){
	let array = [];
	// Длина массива в задании не указана, поэтому произвольно будет 10.
	for (let i = 0; i < 10; i++){
		array[i] = Math.floor(Math.random() * 10 + 1);
	}
	array[elems_sum] = function(){
		let sum = 0;
		for (let elem of this){
			sum+=elem;
		}
		return sum;
	} 
	return array;
}

// Функция принимающая два массива, и возвращающая массив с элементами,
// которые есть в обоих массивах.
function matchElemsInTwoArrays(array1,array2){
	let matchElements = [];
	for (let elem1 of array1){
		for (let elem2 of array2){
			// Проверка indexOf добавлена, чтобы находились элементы которые просто
			// присутствуют обоих массивах, без дупликатов и тому подобного.
			if (elem1 == elem2 && matchElements.indexOf(elem1) == -1) matchElements.push(elem1);
		}
	}
	matchElements[elems_sum] = function(){
		let sum = 0;
		for (let elem of this){
			sum+=elem;
		}
		return sum;
	} 
	return matchElements;
}

// Создание двух случайных массивов и массива с элементами которые присутствуют в них обоих.
let array1 = returnRandomArray();
let array2 = returnRandomArray();
let result = matchElemsInTwoArrays(array1,array2);

// Вывод массивов на экран.
document.write('Первый случайный массив: [' + array1 + ']<br>');
document.write('Второй случайный массив: [' + array2 + ']<br>');
document.write('Элементы, которые есть в обоих массивах: [' + result + ']<br>');

// Проверка функции возвращающей сумму элементов во всех созданных массивах.
document.write('Сумма элементов первого массива: ' + array1[elems_sum]() + '<br>');
document.write('Сумма элементов второго массива: ' + array2[elems_sum]() + '<br>');
document.write('Сумма элементов которые есть в обоих массивах: ' + result[elems_sum]());
