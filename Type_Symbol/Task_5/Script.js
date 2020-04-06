// Задачи по теме "тип Symbol"

// Задача 5
let array = [2,4,8,10];
let elems_summ = Symbol.for('elems_summ'); 
// Функция вывода суммы элементов массива, но теперь символ глобальный
array[elems_summ] = function(){
// либо array[Symbol.for('elems_summ')] = function(){
	let sum = 0;
	for (let elem of this){
		sum+= elem;
	}
	document.write('Сумма элементов массива: ' + sum);
}
// Вызов функции
array[elems_summ]();
