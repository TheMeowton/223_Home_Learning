// Тема "Локальное Хранилище"


// Задача 4
// Решение основано на решении из задачи 2
let textarea = document.querySelector('textarea');
let multibutton = document.getElementById('multibutton');
let prev_button = document.getElementById('prev_button');
let next_button = document.getElementById('next_button');
let page_number = document.getElementById('page_number');

if (localStorage["pages"] === undefined){
	localStorage["pages"] = '{"page": ["' +  textarea.value + '"] }'; 
}

let pages = JSON.parse(localStorage["pages"]);

let current = pages['page'].length-1;

textarea.value = pages['page'][current];

page_number.value = current+1;

multibutton.addEventListener('click', function(){
	if (multibutton.innerHTML == "Редактировать"){
		textarea.disabled = false;
		multibutton.innerHTML = "Сохранить";
		document.querySelector('span').style.marginLeft = "26px";
		if (textarea.value == "Книга для записей...") textarea.value = '';
	}
	else if (multibutton.innerHTML == "Сохранить"){
		textarea.disabled = true;
		multibutton.innerHTML = "Редактировать";
		document.querySelector('span').style.marginLeft = "0px";
		if (textarea.value != '' && pages['page'][current+1] === undefined) {
			pages['page'][current+1] = '';
			next_button.disabled = false;
		}
		if (textarea.value == '') textarea.value = "Книга для записей...";
		
		pages['page'][current] = textarea.value;
	}

});

if (current == 0) prev_button.disabled = true;
if (current == pages['page'].length-1) next_button.disabled = true;

prev_button.addEventListener('click', function(){
	if (current > 0){
		nav_button('-',next_button);
	}
	if (current == 0) prev_button.disabled = true;
});

next_button.addEventListener('click', function(){
	if (current < pages['page'].length){
		nav_button('+',prev_button);
	}
	if (current == pages['page'].length-1) next_button.disabled = true;
});

function nav_button(sign, button){
	pages['page'][current] = textarea.value;
	sign == '-' ? current-- : current++;
	textarea.value = pages['page'][current];
	button.disabled = false;
	page_number.value = current+1;
	page_number.style.border = ''; 
}

page_number.addEventListener('blur', function(){
	if (pages['page'][page_number.value-1] !== undefined){
		pages['page'][current] = textarea.value;
		current = page_number.value-1;
		textarea.value = pages['page'][current];
		page_number.style.border = '';
		if (current == 0) {
			prev_button.disabled = true; 
			if (pages['page'].length-1 != 0){
				next_button.disabled = false;
			}
		}
		if (current == pages['page'].length-1) {
			next_button.disabled = true;
			if (pages['page'].length-1 != 0){
				prev_button.disabled = false;
			}
		}
	}
	else {
		page_number.style.border = '2px solid red';
	}
});

window.addEventListener('beforeunload', function(){
	localStorage["pages"] = JSON.stringify(pages);
});