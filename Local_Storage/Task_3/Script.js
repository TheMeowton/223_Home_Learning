// Тема "Локальное Хранилище"

// Задача 3

/* Само задание */
let form = document.querySelector('form');
if(localStorage["form_saved"] !== undefined){
window.addEventListener('load', function(){
	let to_load = JSON.parse(localStorage["form_saved"]);
	for(let i = 0; i < form.length; i++){
		if (form[i].type == "text" || form[i].type == "textarea") {
			form[i].value = to_load[i];
		}
		if (form[i].type == "checkbox" || form[i].type == "radio"){
			form[i].checked = to_load[i];
		}
		if (form[i].type == "select-one"){
			form[i].selectedIndex = to_load[i];
		}
		if (form[i].type == "select-multiple"){
			for (j = 0; j < to_load[i].length; j++){
				form[i].options[to_load[i][j]].selected = true;
			}
		}
	}
});
}

window.addEventListener('beforeunload', function(){
	let to_safe = [];
	for(let i = 0; i < form.length; i++){
		if (form[i].type == "text" || form[i].type == "textarea") {
			to_safe[i] = form[i].value;
		}
		if (form[i].type == "checkbox" || form[i].type == "radio"){
			to_safe[i] = form[i].checked;
		}
		if (form[i].type == "select-one"){
			to_safe[i] = form[i].selectedIndex;
		}
		if (form[i].type == "select-multiple"){
			to_safe_sub = [];
			for (j = 0; j < form[i].selectedOptions.length;j++){
				to_safe_sub.push(form[i].selectedOptions[j].index);
			}
			to_safe[i] = to_safe_sub;
		}
		localStorage["form_saved"] = JSON.stringify(to_safe);
	}
});

/* логика для формы (не относится к заданию) */

function Reg_submit(event){
	let all_is_ok = true;
	// Переменная для проверки выбрана ли радиокнопка
	let one_radio_selected = 0;

	for(let i = 0; i < form.length; i++){
		if (form[i].type == "text" || form[i].type == "textarea") {
			if (form[i].value == ""){
				form[i].style.border = "1px solid red";
				all_is_ok = false;
			}
			else form[i].style.border = "none";
		}

		if (form[i].type == "select-one"){
			if (form[i].selectedIndex == 0){
				form[i].style.border = "1px solid red";
				all_is_ok = false;
			}
			else form[i].style.border = "none";
		}

		if (form[i].type == "select-multiple"){
			if (form[i].selectedIndex == -1 ||
				form[i].selectedIndex == 0 &&
				form[i].selectedOptions.length == 1){
				form[i].style.border = "1px solid red";
				all_is_ok = false;	
			}
			else form[i].style.border = "none";
		}

		if (form[i].type == "radio"){
			form[i].checked == true ? one_radio_selected += form.length:one_radio_selected--; 
			if (one_radio_selected < 0){
				form[i].parentElement.style.border = "1px solid red";
			}
			else form[i].parentElement.style.border = "none";
		}
	}
	if (one_radio_selected < 0) all_is_ok = false;

	if (all_is_ok === true){
		alert('Успешная регистрация!');
		form.reset();
	}
	else {
		event.preventDefault();
	}
}