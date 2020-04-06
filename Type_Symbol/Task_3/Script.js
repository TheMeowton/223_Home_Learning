// Задачи по теме "тип Symbol"

// Задача 3
let obj = {'chislo1': 5, 'chislo2': 7, 'chislo3': 3}
let keys_summ = Symbol();
// Функция вывода суммы всех элементов объекта
obj[keys_summ] = function(){ 
	let sum = 0;
	for (let key in this){
		sum+= this[key];
	}
	document.write('Сумма элементов объекта: ' + sum);
}
// Вызов функции
obj[keys_summ]();