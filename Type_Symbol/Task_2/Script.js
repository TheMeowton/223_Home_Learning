// Задачи по теме "тип Symbol"

// Задача 2
let obj = {a: 1, b: 2, c: 3}
let myFunc = Symbol();
obj[myFunc] = function(){ alert('!'); }
// Проверка выведит ли функцию с остальными элементами объекта
for (let key in obj){
	document.write(obj[key] + " ");
}
// Саму функцию можно вызвать так obj[myFunc]();
