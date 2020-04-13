// Задания по теме "Генераторы и Итераторы"

// Задача 8
let array = [1, 2, 3, 4, 5, 6, 7, 8];
function *createIterator(array){
	for (let i = 0; i < array.length; i+=2){
		yield [array[i], array[i+1]];
	}
}
let iterator = createIterator(array);

// Проверка
for (let elem of iterator){
	console.log(elem);
}