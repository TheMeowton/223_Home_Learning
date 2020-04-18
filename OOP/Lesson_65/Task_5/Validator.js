// Класс Validator (Задание 5)
class Validator {
	isEmail(string){
		// рамки можно задать жёстче при необходимости
		return /^\w+?@[a-z]+?\.[a-z]+/.test(string);
	}
	isDomain(string){
		// рамки можно задать жёстче при необходимости
		return /[a-zA-Z]+?\.[a-zA-Z]+/.test(string);
	}
	isDate(string){
		return /(\d{2}\.){2}\d{4}/.test(string);
	}
	isPhone(string){
		// 8(xxx)xxx-xx-xx или +7xxxxxxxxxx
		return /(8|\+7)(\({1}\d{3}\){1}|\d{3})\d{3}(\-?\d{2}){2}/.test(string);
	}
}
