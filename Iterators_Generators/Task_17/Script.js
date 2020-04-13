// Задания по теме "Генераторы и Итераторы"

// Задача 17

// Получение ссылки на тело страницы
let body = document.querySelector('body');
// Создание списка
let ul = document.createElement('ul');

// Любая строка
let string = 'stroka';

// Перебор всех символов строки
for (let symbol of string){
	// Создание элемента списка
	let li = document.createElement('li');
	// Присваивание элементу списка символа строки
	li.innerHTML = symbol;
	// Добавление элемента списка в сам список
	ul.appendChild(li);
}
// Добавление списка в тело страницы
body.appendChild(ul);