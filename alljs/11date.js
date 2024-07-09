// Date

let myDate =new Date();
// console.log(myDate);

// Date are converted in string
//toString() 
// console.log(myDate.toString());
//Output:- Tue Jul 09 2024 09:59:03 GMT+0000 (Coordinated Universal Time)

//toDateString()
// console.log(myDate.toDateString());
//Output:- Tue Jul 09 2024

//toISOString()
// console.log(myDate.toISOString());
// 2024-07-09T10:03:24.743Z

//toJSON()
// console.log(myDate.toJSON());
//2024-07-09T10:15:20.018Z

//toTimeString()
// console.log(myDate.toTimeString());
//10:16:27 GMT+0000 (Coordinated Universal Time)

//toLocaleString()
// console.log(myDate.toLocaleString());
//7/9/2024, 10:20:13 AM

// toLocalString()
// console.log(myDate.toISOString());
// 2024-07-09T10:21:46.079Z

//toUTCString()
// console.log(myDate.toUTCString());
//Tue, 09 Jul 2024 10:23:49 GMT


// console.log(typeof myDate );
//object.

// let date1 = new Date(2024, 0, 9, 5, 3);
// console.log(date1.toLocaleString());
//Output :- Tue Jan 09 2024 00:00:00 GMT+0000 (Coordinated Universal Time)

// let date1 = new Date("2024-01-09");
// console.log(date1.toLocaleString());
//Output:- 1/9/2024, 12:00:00 AM

// let date1 = new Date("01-09-2024");
// console.log(date1.toLocaleString());
// 1/9/2024, 12:00:00 AM

let date2 = new Date("01-09-2024")

//timestamp are used to whose person are fastest give answer.
let myTimeStamp = Date.now();

// console.log(myTimeStamp);
//output:- 1720526415273(In milisecond)
// console.log(date2.getTime());
// Output:- 1704758400000

//Date & Time comparison always in milisecond.
// console.log(Date.now());
//Current time in milisecond:- 1720526857578

// console.log(Date.now()/1000);
//1720527087.269

// console.log(Math.floor(Date.now()/1000));
// 1720527087

let newDate = new Date();

// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

console.log(newDate.toLocaleString('default' , { weekday:"short"}));
//output :- current week day.

//weekday
//long=current weekday full name
//narrow =current weekday first lattre
//short =current weekday short name.