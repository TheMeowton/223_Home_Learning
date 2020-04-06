// Задачи по теме "тип Symbol"

// Задача 1
let obj = {a: 1, b: 2, c: 3}
let symbol = Symbol();
obj[symbol] = "yes, it's symbol"
// Проверка выведится ли значение ключа-символа вместе с обычными (Нет).
for (let key in obj){
	document.write(obj[key] + " ");
}