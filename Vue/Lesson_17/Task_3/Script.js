let vue = new Vue({
	el: '#div',
	data: {
		text: 'Какое-то значение',
	},
	methods: {
		changeText: function(){
			this.text = 'Текст поменялся';
		}
	},
});