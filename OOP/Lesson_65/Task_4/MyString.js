// Класс MyString (Задание 4)
class MyString {
	reverse([...string]){
		return string.reverse().join('');
	}	
	ucFirst(string){
		return string[0].toUpperCase() + string.slice(1); 
	}
	ucWords(string){
		string = string.split(' ');
		string.forEach((elem, i, array) => array[i] = this.ucFirst(elem));
		return string.join(' ');
	}
}
