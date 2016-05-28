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
 

//Получить последний элемент массива
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

//Добавить класс в строку

var obj = {
  className: 'open menu'
}

function addClass(obj, cls) {

	var tempArray = [];

	var tempArray = obj.className.split(' ');

	if(tempArray.indexOf(cls) == -1) {
		tempArray.push(cls);
	}


	obj.className = tempArray.join(" ");


}

addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'
console.log(obj);

//Функция removeClass

var obj = {
  className: 'open menu'
};

function removeClass(obj, cls) {
	var tempArray = [];

	tempArray = obj.className.split(" ");
	for( var i = 0; i < tempArray.length; i++) {
		if(tempArray[i] === cls) {
			delete tempArray[i];
		}
	}

	console.log(tempArray);
}


removeClass(obj, 'open'); // obj.className='menu'


// Напишите функцию sum, которая работает так: sum(a)(b) = a+b.

// Да, именно так, через двойные скобки (это не опечатка). Например:

sum(1)(2) = 3
sum(5)(-1) = 4

function getSum(a) {

	return function(b) {
		var sum = a + b;
		return sum;
	}
}

alert(getSum(1)(2));


// Проверка на аргумент-undefined

function f(x) {
  if(arguments.length !== 0) {
  	console.log(1);
  }else {
  	console.log(0);
  }
}

f(undefined); // 1
f(); // 0


//Сумма аргументов

function sum() {
	var sum = 0;
	for(var i = 0; i < arguments.length; i++) {
		sum += arguments[i];
	}

	console.log(sum);

}

sum(); //= 0
sum(1); //= 1
sum(1, 2); //= 3
sum(1, 2, 3); //= 6
sum(1, 2, 3, 4); //= 10



























