// Тема "Локальное Хранилище"


// Задача 4
// Решение основано на решении из задачи 2
let textarea = document.querySelector('textarea');
let multibutton = document.getElementById('multibutton');
let prev_button = document.getElementById('prev_button');
let next_button = document.getElementById('next_button');
let page_number = document.getElementById('page_number');

// Если хранилище пустое, добавить 1 страницу
if (localStorage["pages"] === undefined){
	localStorage["pages"] = '{"page": ["' +  textarea.value + '"] }'; 
}

// объект для хранения страниц из хранилища, и во время сессии
let pages = JSON.parse(localStorage["pages"]);

// переменная содержащая номер текущей страницы
let current = pages['page'].length-1;

// выставление последней страницы в текстареа при загрузке
textarea.value = pages['page'][current];

// выставление последнего номера страницы при загрузке (+1 потому что массив с нуля)
page_number.value = current+1;

// кнопка редактирования и сохранения страниц
multibutton.addEventListener('click', function(){
	// если сейчас кнопка "Редактировать"
	if (multibutton.innerHTML == "Редактировать"){
		textarea.disabled = false;
		multibutton.innerHTML = "Сохранить";
		document.querySelector('span').style.marginLeft = "26px";
		if (textarea.value == "Книга для записей...") textarea.value = '';
	}
	// если сейчас кнопка "Сохранить"
	else if (multibutton.innerHTML == "Сохранить"){
		textarea.disabled = true;
		multibutton.innerHTML = "Редактировать";
		document.querySelector('span').style.marginLeft = "0px";
		// если при сохранении страница не будет пустой, то будет создана новая пустая страница
		if (textarea.value != '' && pages['page'][current+1] === undefined) {
			pages['page'][current+1] = '';
			next_button.disabled = false;
		}
		if (textarea.value == '') textarea.value = "Книга для записей...";
		// сохранение страницы в объект
		pages['page'][current] = textarea.value;
	}

});

// отключение кнопок при загрузке - назад, если первая страница;
// вперёд, если последняя страница
if (current == 0) prev_button.disabled = true;
if (current == pages['page'].length-1) next_button.disabled = true;

// кнопка назад
prev_button.addEventListener('click', function(){
	if (current > 0){
		nav_button('-',next_button);
	}
	// отключение кнопки если достигнута первая страница
	if (current == 0) prev_button.disabled = true;
});
// кнопка вперёд
next_button.addEventListener('click', function(){
	if (current < pages['page'].length){
		nav_button('+',prev_button);
	}
	// отключение кнопки если достигнута последняя страница
	if (current == pages['page'].length-1) next_button.disabled = true;
});

// функция с логикой кнопок вперёд и назад
// принимает знак - (предыдущая) и + (следующая)
// а также противоположную кнопку, которую нужно будет включить
// при перелистывании страниц
function nav_button(sign, button){
	pages['page'][current] = textarea.value;
	sign == '-' ? current-- : current++;
	textarea.value = pages['page'][current];
	button.disabled = false;
	page_number.value = current+1;
	page_number.style.border = ''; 
}

// поле номера страниц, пользователь может
// выбрать на какую страницу переместиться
page_number.addEventListener('blur', function(){
	// если вызываемая страница существует
	if (pages['page'][page_number.value-1] !== undefined){
		pages['page'][current] = textarea.value;
		current = page_number.value-1;
		textarea.value = pages['page'][current];
		page_number.style.border = '';
		// если вызывается первая страница
		if (current == 0) {
			prev_button.disabled = true;
			// если впереди есть страницы, включить кнопку вперёд 
			if (pages['page'].length-1 != 0){
				next_button.disabled = false;
			}
		}
		// если вызывается последняя страница
		if (current == pages['page'].length-1) {
			next_button.disabled = true;
			// если позади есть страницы, включить кнопку назад
			if (pages['page'].length-1 != 0){
				prev_button.disabled = false;
			}
		}
	}
	// если вызываемой страницы не существует
	else {
		page_number.style.border = '2px solid red';
	}
});

// сохранение объекта со страницами в локальное хранилище
// при закрытии/перезагрузке страницы
window.addEventListener('beforeunload', function(){
	localStorage["pages"] = JSON.stringify(pages);
});