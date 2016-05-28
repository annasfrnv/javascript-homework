"use strict"

//Создайте дату

//Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут.
//Временная зона – местная. Выведите его на экран.

var feb_2012 = new Date(2012, 1, 20, 3, 12, 0);

console.log(feb_2012);

//Имя дня недели

//Создайте функцию getWeekDay(date), которая выводит текущий день недели в коротком формате „пн“, „вт“, … „вс“.

function getWeekDay(date){

	var weekDay = date.getDay();

	switch(weekDay) {
		case 0: return "воскресеньюшко"
	    case 1: return "понедельник"
	    case 2: return "вторничек"
	    case 3: return "средонька"
	    case 4: return "четвержок"
	    case 5: return "пятничка"
	    case 6: return "субботка"
	}
}

var date = new Date(2016,4,2); 
alert( getWeekDay(date) );

//День недели в европейской нумерации

function getLocalDay(date) {
	var weekDays = ["пн", "вт", "ср", "четв", "пят", "сб", "вскр"];

	var day = weekDays[date.getDay() - 1];
	
	return  weekDays.indexOf(day) + 1; 
}


var date = new Date(2016, 4, 28);  // 3 янв 2012
alert( getLocalDay(date) );       // вторник, выведет 2


//Последний день месяца?

function getLastDayOfMonth(year, month) {
	var date = new Date(year, month+1, 0);
	var lastDay = date.getDate();
	return lastDay;
}

console.log(getLastDayOfMonth(2012, 1)); //29


//Сколько секунд уже прошло сегодня?

function getSecondsToday(){
	var now = new Date();

	return  "Today is " + now + "\n" + "Seconds since today: " + (now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds());
}

console.log(getSecondsToday()); 

//Сколько секунд - до завтра?

function getSecondsToTomorrow(){
	var now = new Date(); //18:45
	var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

	var time = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();

	var untilTomorrow = Math.round((tomorrow - now) / 1000);
	return "tommorow is " + tomorrow + "\n" + "seconds until tommorow " + untilTomorrow;

}

console.log(getSecondsToTomorrow()); 


















