let arr = ['Первое', 'Второе', 'Закуски', 'Десерт']; // условие "дан массив"

let vue = new Vue({
	el: '#div',
	data: {
		options: arr,
		selected: arr[0],
	},
});