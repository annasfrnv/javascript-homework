"use strict";

//Сумма через замыкание

function sum(a){

	return function(b) {
		return a + b;
	}

}

console.log(sum(1)(2)); // = 3
console.log(sum(5)(-1)); // = 4


//Функция - строковый буфер

function makeBuffer() {
	var data = "";

	function buffer (value) {
		if(value !== undefined) {
			data += value;
		}

		return data;
	}

	buffer.clear = function() {
		data = "";
	}

	return buffer;
}

var buffer = makeBuffer();

buffer("Тест");
buffer(" тебя не съест ");
console.log( buffer() ); // Тест тебя не съест

buffer.clear();

console.log( buffer() ); // ""




//Сортировка
var users = [{
  name: "Вася",
  surname: 'Иванов',
  age: 20
}, {
  name: "Петя",
  surname: 'Чапаев',
  age: 25
}, {
  name: "Маша",
  surname: 'Медведева',
  age: 18
}];


function byField(field) {

	return function(a, b) {
      return a[field] > b[field] ? 1 : -1;
    }

}


users.sort(byField('name'));

users.forEach(function(user) {
  console.log( user.name );
}); // Вася, Маша, Петя

users.sort(byField('age'));

users.forEach(function(user) {
  console.log( user.name );
}); // Маша, Вася, Петя


//Фильтрация через функцию

function filter(arr, func){

	var newArr = [];

	for(var i = 0; i < arr.length; i++) {
		newArr.push(arr[i]);
	}


	return newArr;

}

function inBetween(a,b) {


}


function inArray() {

}


var arr = [1, 2, 3, 4, 5, 6, 7];

alert(filter(arr, function(a) {
  return a % 2 == 0
})); // 2,4,6

alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6

alert( filter(arr, inArray([1, 2, 10])) ); // 1,2



//армия функций
function makeArmy() {

  var shooters = [];

  for (var i = 0; i < 10; i++) {
   	var shooter = function me() {
      alert( me.i );
    };
    shooter.i = i;

     shooters.push(shooter);
   
  }

  return shooters;

  console.log(shooters);
}

var army = makeArmy();

army[0](); // стрелок выводит 10, а должен 0
army[5](); // стрелок выводит 10...
// .. все стрелки выводят 10 вместо 0,1,2...9



















