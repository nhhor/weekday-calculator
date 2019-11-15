import { MyDate } from './backend.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// let myDate = new MyDate('2015-03-25');
// // var d = new Date('2005-08-08');
//
// console.log("LOG myDate.dateEntered: ",myDate.dateEntered);
// console.log("LOG myDate.dateCheck(myDate): ",myDate.dateCheck(myDate.dateEntered));




$(document).ready(function() {
  $('form#frontForm').submit(function(event) {
    event.preventDefault();

    let dateInput = $('#userDate').val();
    let date = new MyDate(dateInput);

    console.log("LOG date: ",date);

    console.log("LOG date.splitDate: ",date.splitDate());

  });
});
