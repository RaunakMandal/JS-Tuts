// disc = (list - sell)/list * 100

var sellingPrice = 199;
var listPrice = 999;
var discount = ((listPrice - sellingPrice)/listPrice) * 100;

console.log("Discount is: ",discount,"%");

// discount = Math.round(discount);
discount = Math.floor(discount);

console.log("Discount is: ",discount,"%");