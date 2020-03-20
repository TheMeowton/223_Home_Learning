// Тема "Локальное Хранилище"

// Задача 2
let page_is_loaded = true;
let textarea_2 = document.getElementById("textarea_2");
let buttons_place = document.getElementById('buttons_place');
if (localStorage["changes"] === undefined) {
	localStorage["changes"] = '{"values": ["' + textarea_2.value + '"] }';
}

let changes = JSON.parse(localStorage["changes"]);

let current = changes['values'].length-1;
textarea_2.value = changes['values'][current];

textarea_2.addEventListener('change', function(){
	changes['values'].push(textarea_2.value);	
	current = changes['values'].length-1;
	add_buttons();
});

if (localStorage["buttons_appeared_once"]) add_buttons();

function add_buttons(){
	if (buttons_place.innerHTML == ''){
		buttons_place.innerHTML = "<button id='prev_button'>←</button><button id='next_button'>→</button>";
	}
	let prev_button = document.getElementById("prev_button");
	let next_button = document.getElementById("next_button");

	next_button.disabled = true;
	prev_button.disabled = false;

	while(page_is_loaded){	
		prev_button.addEventListener('click', function(){
			if (current > 0) {
				current--;
				textarea_2.value = changes['values'][current];
				next_button.disabled = false;
				}
			if (current == 0) prev_button.disabled = true;
		});

		next_button.addEventListener('click', function(){
			if (current < changes['values'].length-1) {
				current++;
				textarea_2.value = changes['values'][current];
				prev_button.disabled = false;
				}
			if (current == changes['values'].length-1) next_button.disabled = true;
		});
		page_is_loaded = false;
		localStorage["buttons_appeared_once"] = true;
	}
}


window.addEventListener('beforeunload', function(){
	localStorage["changes"] = JSON.stringify(changes);
});