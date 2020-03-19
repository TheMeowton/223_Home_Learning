// Тема "Локальное Хранилище"

// Задача 1
let textarea_1 = document.getElementById("textarea_1");
textarea_1.addEventListener('blur',function(){
	localStorage['value'] = textarea_1.value;

});
window.addEventListener('load', function(){
	if (localStorage['value'] !== undefined) textarea_1.value = localStorage['value'];
});

