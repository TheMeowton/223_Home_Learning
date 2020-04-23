let vue = new Vue({
	el: '#div',
	data: {
		arr: [10,40,20,9,0,21,4,5,8,3,0,-10,49,50],
	},
	methods: {
		sort: function(){
			this.arr = this.arr.filter(function(elem){
				return (elem > 0 && elem < 10) ? true : false;
			});
		},
	},
});