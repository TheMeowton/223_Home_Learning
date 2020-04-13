// Задания по теме "Генераторы и Итераторы"

// Задача 25
function button_click(){
let ps = document.querySelectorAll('.task');
let entries = ps.entries();
for (let [number, p] of entries){
	// +1 к номеру, чтобы порядковый номер был с единицы,
	// и убрано повторение при повторном нажатии кнопки
	p.innerHTML = 'Абзац ' + Number(number+1); 
}
}