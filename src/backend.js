export let MyDate = function(dateEntered) {
  this.dateEntered = dateEntered;
};

MyDate.prototype.dateCheck = function(myDate) {
  // var dateEntered = new MyDate();
  // var newDate = '2015-03-25';
  // var myDate = new MyDate(newDate);
  console.log(this.dateEntered);
  console.log(myDate);
  if (this.dateEntered === this.dateEntered){
    return true;
  }
  else {
    return false;
  }
};





// var date = new Date();
// console.log(date instanceof Date && !isNaN(date.valueOf()));
//
// function isValidDate(d) {
//   return d instanceof Date && !isNaN(d);
// };
