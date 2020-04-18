// Тема 65
// Задание 5

// Создание экземпляра (объекта) класса
let validator = new Validator();

// Проверка методов
console.log(validator.isEmail('Kartopolsev@gmail.com'));
console.log(validator.isDomain('youtube.com'));
console.log(validator.isDate('17.04.2020'));
console.log(validator.isPhone('+7(900)441-28-57'));