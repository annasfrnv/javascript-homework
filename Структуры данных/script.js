"use strict"

// Определите, пуст ли объект
function isEmpty(obj) {
	var counter = 0;
	for(var key in obj) {
		counter++;
	}

	if (counter == 0) {
		return true;
	}

	return false;
}

var schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "подъём";

alert( isEmpty(schedule) ); // false


// Сумма свойств
var salaries = {
  "Вася": 500,
  "Петя": 400,
  "Даша": 250
};

function getSalariesSum(salaries) {

	var salariesSum = 0;

	for(var money in salaries) {
		salariesSum += salaries[money];

	}

	alert(salariesSum);	
}

getSalariesSum(salaries);


//Свойство с наибольшим значением
var salaries = {
  "Вася": 500,
  "Петя": 400,
  "Даша": 250
};

function showMaxSalary(obj) {
	var maxSalary = 0;
	var name;
	var noEmployees = "нет сотрудников";
	var counter = 0;

	for(var key in obj) {

		if(obj[key] > maxSalary) {
			maxSalary = obj[key];
			name = key;
		} 

		counter++;
	}

	if( counter == 0) { alert(noEmployees); }
	else { alert(name); }
}

showMaxSalary(salaries);

//Клонирование объекта - не работает
var students = {
	"Петров Петр": {
		age: 13,
		grade: 8,
		gpa: 86,
	},

	"Васильев Василий": {
		age: 8,
		grade: 2,
		gpa: 95
	},

	"Сидоров Сидр": {
		age: 17,
		grade: 11,
		gpa: 74
	}
}

function cloneObj(obj) {
	var newObj = {};

	for(var key in obj) {

		console.log(key + " : " + obj[key]);

		if(typeof obj[key] === 'object') {

			cloneObj(obj[key]);
		}

		
		newObj[key]= obj[key];
	}

	return newObj;

}

var users = new Object()
users = cloneObj(students);

var oldGpa = students["Петров Петр"].gpa;
var newGpa = users["Петров Петр"].gpa = 100;


alert("Средний балл Петра в исходном объекте: " + oldGpa +  "\n" + "Средний балл Петра в клонированном объекте: " + newGpa );

console.log(students);
console.log(users);
 

Получить последний элемент массива
var arr = [1,2,3,4,5,6];

var length = arr.length - 1 ;
console.log(arr[length]);

//Добавить новый элемент в массив
var goods = [1,2];

goods.push("Computers");
console.log(goods);

//Создание массива 
var styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll");
styles[length - 2] = "Classics";

styles.shift()
alert(styles);
styles.unshift("Rap", 'Reggae');

//Получить случайное значение из массива
var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];

var rand = Math.floor(Math.random() * arr.length);

alert(arr[rand]);


// Создайте калькулятор для введённых значений - не работает
// Напишите код, который:

// Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
// Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
// При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
// Выводит сумму всех значений массива

var arr = [];
var input = prompt("Введите число");

var sum = 0;

arr.push(input);


for(var i = 0; i < arr.length; i++) {
	sum += arr[i];
	arr.push(prompt("Введите число"));

	if(input === "") {
		alert(sum);
	}
}

console.log(sum);




















