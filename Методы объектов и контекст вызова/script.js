"use strict";

//Цепочка вызовов

var ladder = {
  step: 0,
  up: function() { // вверх по лестнице
    this.step++;

    return this;
  },
  down: function() { // вниз по лестнице
    this.step--;

    return this;
  },
  showStep: function() { // вывести текущую ступеньку
    alert( this.step );
    return this;
  }

};

ladder.up().up().down().up().down().showStep(); // 1



//Создайте калькулятор

var calculator = {

	read: function(a,b){
		this.a = +prompt("Введите 1 значение");
		this.b = +prompt("Введите 2 значение");

	},
	sum: function(a, b){
		return this.a + this.b;
	},

	mul: function(a,b){
		return this.a * this.b;

	}
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


//Сумма произвольного количества скобок

function sum(a){

	let	 sum = a;

	function func(b) {
		sum += b;
		console.log(func);
		return func;

	}

	func.toString = function() {
		return sum;
	}

	return func;

}

console.log(sum(1)(2)); // == 3; // 1 + 2
console.log(sum(1)(2)(3)); // == 6; // 1 + 2 + 3
console.log(sum(5)(-1)(2)); // == 6
console.log(sum(6)(-1)(-2)(-3));// == 0
console.log(sum(0)(1)(2)(3)(4)(5)); // == 15


//Создать Calculator при помощи конструктора

function Calculator() {
	this.sum = function() {
		return this.a + this.b;
	},

	this.mul = function() {
		return this.a * this.b;

	},

	this.read = function() {
		this.a = +prompt("Введите 1-е значение");
		this.b = +prompt("Введите 2-е значение");

	}
}

var calculator = new Calculator();
calculator.read();

alert( "Сумма=" + calculator.sum() );
alert( "Произведение=" + calculator.mul() );



//Создать Accumulator при помощи конструктора

function Accumulator(startingValue) {
	this.value = startingValue;
	this.read = function() {
		var input = +prompt("Введите значение");
		this.value += input;

	}
}

var accumulator = new Accumulator(1); // начальное значение 1
accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению
alert( accumulator.value ); // выведет текущее значение

function powerCalc(name, func) {

	this.calculate = function(string) {
		var tempArr = string.split(" "); // ["2", "+", "3"]
		var a = tempArr[0];
		var op = tempArr[1];
		var b = tempArr[2];

		if(op == "+") {
			return	parseInt(a) + parseInt(b);
		}

		if(op == "-") {
			return	a - b;
		}

	}


}

var newCalc = new powerCalc;

var result = newCalc.calculate("2 + 3");
console.log( result ); // 8



function User(fullName) {
  	this.fullName = fullName;

	Object.defineProperties(this, {

		firstName: {
		    get: function() {
		     	return this.fullName.split(' ')[0];
		    },

		    set: function(newFirstName) {
		    	this.fullName = newFirstName + " " + this.lastName;
		    }
		},

		lastName: {
			get: function() {
				return this.fullName.split(' ')[1];
			},

			set: function(newLastName) {
		    	this.fullName = this.firstName + " " + newLastName;
		    }

		}
	})
}


var vasya = new User("Василий Попкин");

// чтение firstName/lastName
console.log( vasya.firstName ); // Василий
console.log( vasya.lastName ); // Попкин

// запись в lastName
vasya.lastName = 'Сидоров';

console.log( vasya.fullName ); // Василий Сидоров


//Счетчик объектов

function Article() {
  this.created = new Date();
  this.count++;

  this.last = this.created;


  showStats = function () {
		console.log("всего: " + this.count + ", Последняя: " + last);
	}
}



new Article();
new Article();

Article.showStats(); // Всего: 2, Последняя: (дата)

new Article();

Article.showStats(); // Всего: 3, Последняя: (дата)


















