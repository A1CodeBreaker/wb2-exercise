//at a x % interest rate, your saving account will be worth y in z years
// var interest, principle, worth, years;

//sample data
var interest = 7;
var principle = 10000;

var years = 72 / interest;
var worth = principle * 2;
//calc
console.log("At a" + interest + "% interest rate, your savings account wil be worth $"+worth+"in"+ years.toFixed(1)+"years");