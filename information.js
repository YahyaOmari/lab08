alert("Now I want to take some information from you.");

var name = prompt("Please enter your name.");
var number = prompt("Enter your weight " + name + ".");

alert("How much do you want to lose weight " + name + "? Press Ok to continue please.");
var number2 = prompt("Enter how much?");


function sub() {
    var subTotal = parseInt(number) - parseInt(number2);
    alert("So " +name + " you want to be " + subTotal);
    alert("Okay we will contact you soon, thanks for the information");
}
