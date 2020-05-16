jQuery(document).ready(function() {
    jQuery('.post').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 100
       });
});

function house_robber(house_values){
	let prev_max_money = 0;
	let max_money = 0;
	for (house_val in house_values) {
		let next_sum = prev_max_money + house_values[house_val];
		prev_max_money = max_money;
		max_money = Math.max(max_money, next_sum);
	}
	return max_money;
}

let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let houses_val = document.getElementById('houses_val');
let houseID = document.getElementById('houseID');
let answer = document.getElementById('answer');
let id = 1;
let house_values = [];
input1.addEventListener('change', function(){
	house_values = [];
	houses_val.innerHTML = '3) Вводимые Вами суммы: ';
	answer.innerHTML = '4) Итоговый ответ - Максимально возможная прибыль при Ваших условиях:';
	input1.style = "width: 3em; height: 1em; font-size: 1em; border: 3px solid black; text-align: center;";
	id = 1;
	houseID.innerHTML = id;
});
input2.addEventListener('keydown', function(event){
	if (house_values.length < Number(input1.value) && event.key == "Enter" && Number.isInteger(Number(input2.value)) && input2.value != ''){
		house_values.push(Number(input2.value));
		input2.value = '';
		houses_val.innerHTML = '3) Вводимые Вами суммы: ' + house_values;
		answer.innerHTML = '4) Итоговый ответ - Максимально возможная прибыль при Ваших условиях: <font color="lime">' + house_robber(house_values) + '$</font>';
		if (id < Number(input1.value)){
			id++;
			houseID.innerHTML = id;
		}
	}
	else if (house_values.length == Number(input1.value) || Number(input1.value < 1)){
		input1.style = "width: 3em; height: 1em; font-size: 1em; border: 3px solid red; text-align: center;";
	}
});