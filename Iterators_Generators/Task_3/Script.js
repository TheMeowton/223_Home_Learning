// Задания по теме "Генераторы и Итераторы"

// Задача 3

let array = ['Too', 'Much', 'Homework'];

// Вывод в консоль
console.log(array[Symbol.iterator]);

// Вывод с вызовом
console.log(array[Symbol.iterator]());

// Вызов метода объекта итератор
let iterator = array[Symbol.iterator]();
console.log(iterator.next());