// Тема 22
document.write("Тема 22<br>");

// Задача 2
document.write("Задача 2: <br>");
let string = 'sss site.ru zzz site.com kkk';
let result = string.replace(/[a-z]+?\.[a-z]+?\s/g, "<a href='http://site.ru'>site.ru</a> ");
document.write(result);