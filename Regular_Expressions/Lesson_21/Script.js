// Тема 21
document.write("Тема 21<br>");

// Задача 1
document.write("Задача 1: <br>");
let string = '12 123 34 56 78 123 123456';
let result = string.replace(/\b(\d)(\d)\b/g, "$2$1");
document.write(result);

/* 
Чтобы брались только двузначные числа
используются спец. символы \b
*/
