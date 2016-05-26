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

 



