// Тема 18
document.write("Тема 18<br>");

// Задача 2
document.write("Задача 2: ");
let ex2_string = 'http://nke.ru';
document.write(/^http(:|s:)\/\//.test(ex2_string));

// Задача 4
document.write("<br>Задача 4: ");
let ex4_string = 'cat.jpg';
document.write(/\.jpe?g/.test(ex4_string));

// Задача 6
document.write("<br>Задача 6: ");
let ex6_string = '42';
document.write(/^\d{1,12}$/.test(ex6_string));

// Задача 8
document.write("<br>Задача 8: ");
// дд.мм.гггг
let ex8_string = '11.01.2016';
/* недостаток: число дня и месяца 
сможет выйти за рамки 1-31 1-12
или быть нулевым, можно сделать проверку после получения
*/
document.write(/(\d{2}\.){2}\d{4}/.test(ex8_string));

// Задача 10
document.write("<br>Задача 10: ");
let ex10_string = 'kartopolsev@gmail.com';
// логин @ домен . область (при необходимости можно ввести более жёсткие условия)
let ex10_RegExp = /^\w+?@[a-z]+?\.[a-z]+/;
document.write(ex10_RegExp.test(ex10_string));
