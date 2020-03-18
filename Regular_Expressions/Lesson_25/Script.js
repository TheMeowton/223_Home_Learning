// Тема 25
document.write("Тема 25<br>");

// Задача 2
document.write("Задача 2: <br>");
let string = "<a href='' class='eee' id='zzz' data-test='test'>"
let attributes = string.match(/\w+?(?==)/g); // Без указания что аттрибут пользовательский (если такие есть) прим: выведет просто test
document.write("Атрибуты: " + attributes);

/* С указанием что аттрибут пользовательский (если такие есть) прим: выведет не test, а data-test
let attributes = string.match(/\w+?-?\w*?(?==)/g);
*/