// Тема 21
document.write("Тема 21<br>");

// Задача 1
document.write("Задача 1: <br>");
let string = '12 34 56 78';
let result = string.replace(/(\d)(\d)/g, "$2$1");
document.write(result);