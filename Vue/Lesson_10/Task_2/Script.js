let vue = new Vue({
	el: '#div',
	data: {
		text: '',
		arr: [],
	},
	methods:{
		textToArray: function(){
			this.text != '' ? this.arr = this.text.split(' ') : this.arr = [];
		}
	}
});