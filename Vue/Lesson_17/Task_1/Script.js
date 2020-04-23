let vue = new Vue({
	el: '#div',
	data: {
		show: false,
	},
	methods: {
		showText: function(){
			this.show = this.show ? false : true;
		}
	},
});