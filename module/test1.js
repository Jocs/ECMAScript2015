export class Person {
	constructor(name, age){
		this.name = name;
		this.age = age;
	};
	showName(){
		var p = document.getElementById('content');
		p.innerHTML = this.name;
	}
};