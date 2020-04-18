// Класс Rectangle (Задание 3)
class Rectangle {
	constructor(width, height){
		this.div = document.createElement('div');
		this.setWidth(width);
		this.setHeight(height);
		this.div.style.border = "1px solid red";
		document.body.appendChild(this.div);
	}

	getWidth(){
		return parseInt(this.div.style.width);
	}
	getHeight(){
		return parseInt(this.div.style.height);
	}
	setWidth(width){
		this.div.style.width = width + "px";
	}
	setHeight(height){
		this.div.style.height = height + "px";
	}
}
