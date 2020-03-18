// Тема 26
document.write("Тема 26<br>");

// Задача 1
document.write("Задача 1: <br>");
let string = 'aaa [2] bbb [3] ccc [12] ddd';
let result = string.replace(/\[(\d+)\]/g, function(match, value){
	return "[" + (value * value) + "]";
});
document.write(result);