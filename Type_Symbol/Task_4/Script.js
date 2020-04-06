// Задачи по теме "тип Symbol"

// Задача 4
let array = [2,4,8,10]
let elems_summ = Symbol();
// Функция вывода суммы элементов массива
array[elems_summ] = function(){ 
	let sum = 0;
	for (let elem of this){
		sum+= elem;
	}
	document.write('Сумма элементов массива: ' + sum);
}
// Вызов функции
array[elems_summ]();