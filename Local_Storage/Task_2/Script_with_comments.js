// Тема "Локальное Хранилище"

// Задача 2
/*
Проверка загружена ли страница (необходимо для предотвращения
повторения создания эвента на кнопках)
*/
let page_is_loaded = true;
let textarea_2 = document.getElementById("textarea_2");
/* 
Условие задачи: должны появляться стрелочки (получается что их не
должно быть пока не было изменений в текстареа) 
*/
let buttons_place = document.getElementById('buttons_place');
/* 
Добавление изначального значения текстареа в локальное хранилище
если оно пустое
*/
if (localStorage["changes"] === undefined) {
	localStorage["changes"] = '{"values": ["' + textarea_2.value + '"] }';
}

/*
Объект для хранения изменений,
и списка всех версий значений текстареа из локального хранилища) 
*/
let changes = JSON.parse(localStorage["changes"]);

// Переменная для хранения номера текущей версии значения текстареа
let current = changes['values'].length-1;

// Установка начальным значением значение последнего элемента changes
textarea_2.value = changes['values'][current];

/* 
При изменении текста в текстареа
добавление значения в объект changes и появление кнопок
*/
textarea_2.addEventListener('change', function(){
	changes['values'].push(textarea_2.value);	
	current = changes['values'].length-1;
	add_buttons();
});

/* 
Появление кнопок, если изменения уже делались,
и страницу закрыли/перезагрузили 
*/
if (localStorage["buttons_appeared_once"]) add_buttons();

function add_buttons(){
	// Появление кнопок, если их нет
	if (buttons_place.innerHTML == ''){
		buttons_place.innerHTML = "<button id='prev_button'>←</button><button id='next_button'>→</button>";
	}
	let prev_button = document.getElementById("prev_button");
	let next_button = document.getElementById("next_button");

	/*
	отключение кнопки вперёд при добавлении нового значения,
	и включение кнопки назад
	*/
	next_button.disabled = true;
	prev_button.disabled = false;

	// Чтобы сработало только один раз, пока страницу не перезагрузят\закроют
	while(page_is_loaded){	

		// Кнопка назад
		prev_button.addEventListener('click', function(){
			if (current > 0) {
				current--;
				textarea_2.value = changes['values'][current];
				next_button.disabled = false;
				}
			// выключение кнопки при достижении самого начала
			if (current == 0) prev_button.disabled = true;
		});

		// Кнопка вперёд
		next_button.addEventListener('click', function(){
			if (current < changes['values'].length-1) {
				current++;
				textarea_2.value = changes['values'][current];
				prev_button.disabled = false;
				}
			// выключение кнопки при достижении конца
			if (current == changes['values'].length-1) next_button.disabled = true;
		});
		page_is_loaded = false;
		// отметка что кнопки появились один раз
		localStorage["buttons_appeared_once"] = true;
	}
}

/*
Сохранение массива со значениями в локальное
хранилище при закрытии вкладки\обновлении
*/ 
window.addEventListener('beforeunload', function(){
	localStorage["changes"] = JSON.stringify(changes);
});
