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