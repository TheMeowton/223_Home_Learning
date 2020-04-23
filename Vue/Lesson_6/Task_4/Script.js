let vue = new Vue({
	el: '#ul',
	data: {
		arr: [4,12,36,3,9,-4],
	},
	methods: {
		square: function(index){
			this.arr.splice(index,1,Math.pow(this.arr[index],2));
		},
	},
});