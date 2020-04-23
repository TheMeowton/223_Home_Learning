let vue = new Vue({
	el: '#div',
	data: {
		show: true,
	},
	methods:{
		hide: function(){
			this.show = this.show ? false : true;
		}
	}
});