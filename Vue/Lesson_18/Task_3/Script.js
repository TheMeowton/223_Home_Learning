let vue = new Vue({
	el: '#div',
	data: {
		button: '',
	},
	methods: {
		btnClickd: function(typeOfButton){
			this.button = typeOfButton;
		}
	},
});