let vue = new Vue({
	el: '#div',
	data: {
		date: '2020-04-22',
	},
	filters: {
		ddmmyyyy: function(value){
			return value.split('-').reverse().join('.');
		}
	}
});