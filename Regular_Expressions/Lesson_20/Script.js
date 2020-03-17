// Тема 20
document.write("Тема 20<br>");

// Задача 2
document.write("Задача 2: <br>");
let string = '31.12.2025';
let pockets = string.match(/(\d{2})\.(\d{2})\.(\d{4})/);
let pockets_names = ["Найденное: ", "Карман 1 (День): ", "Карман 2 (Месяц): ", "Карман 3 (Год): "];
for (let i = 0; i < pockets.length; i++){
	document.write(pockets_names[i] + pockets[i] + "<br>");
}