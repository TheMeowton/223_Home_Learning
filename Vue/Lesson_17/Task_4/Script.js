let vue = new Vue({
	el: '#div',
	data: {
		textWithTags: '',
	},
	methods: {
		showText: function(){
			this.textWithTags = '<i>Текст</i> <b>c</b> <font size="6" color="red">тегами</font>';
		}
	},
});