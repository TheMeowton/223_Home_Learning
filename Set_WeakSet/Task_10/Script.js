// Задача 10
/* Условие: Пусть дан массив. С помощью Set получите этот же массив, но без дублей.  */
let array = [1, 2, 1, 2, 1, 3, 4, 5, 6];
console.log("Изначальный массив: " + array)
array = [...new Set(array)];
console.log("Массив без дублей: " + array);
console.log("Массив не стал объектом: " + Array.isArray(array));