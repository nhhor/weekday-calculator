import { MyDate } from './backend.js';
//
let myDate = new MyDate('2015-03-25');
// var d = new Date('2005-08-08');

console.log("LOG myDate.dateEntered: ",myDate.dateEntered);
console.log("LOG myDate.dateCheck(myDate): ",myDate.dateCheck(myDate.dateEntered));



var date1 = new Date('12-17-1995');

// Sun Dec 17 1995 03:24:00 GMT...
console.log("Date1: ",date1);
