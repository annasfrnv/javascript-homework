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




















