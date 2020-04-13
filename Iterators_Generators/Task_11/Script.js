// Задания по теме "Генераторы и Итераторы"

// Задача 11
let object = {'key1': 'value1', 'key2': 'value2', 'key3': 'value3', 'key4': 'value4'};
function *createIterator(object){
	for (let key in object){
		yield object[key];
	}
}
let iterator = createIterator(object);

// Проверка
for (let elem of iterator){
	console.log(elem);
}