// Класс Student (Задание 1)
class Student extends User {
	constructor(name,surname,year){
		super(name, surname);
		this.year = year;
	}
	getCourse(){
		return (new Date()).getFullYear() - this.year;
	}
}
