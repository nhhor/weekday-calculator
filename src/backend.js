export let MyDate = function(dateEntered) {
  this.dateEntered = dateEntered;
  this.dateArray = [];
};

MyDate.prototype.dateCheck = function() {
  if (this.dateEntered === this.dateEntered){
    return true;
  }
  else {
    return false;
  }
};

MyDate.prototype.splitDate = function() {
  let seperatedDate = this.dateEntered.split('-');
  MyDate.dateArray.push(seperatedDate);
  // seperatedDate.forEach(function(thing){
  //   MyDate.dateArray.push(thing);
  // });
  return seperatedDate;
};
