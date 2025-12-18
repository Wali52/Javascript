// CHP 26 -30


// q1
let num1 = +prompt('Enter a number')
document.write(`number: ${num1}`)
document.write('round off value of the number:',Math.round(num1))
document.write('floor value of the number:',Math.floor(num1))
document.write('ceil value of the number:',Math.ceil(num1))

// q2
let negNum = +prompt('Enter a negative number')
document.write(`number: ${negNum}`)
document.write('round off value of the number:',Math.round(negNum))
document.write('floor value of the number:',Math.floor(negNum))
document.write('ceil value of the number:',Math.ceil(negNum))


// q3
let absoluteValue = +prompt('Enter a number')
document.write(`absolute value of ${absoluteValue} is`,Math.abs(absoluteValue))

// q4
let dice = Math.floor(Math.random() * 6) + 1;
document.write("<h3>4. Dice Roll</h3>");
document.write("Random dice value: " + dice + "<br><br>");

// q5
let coin = Math.floor(Math.random() * 2)
if (coin===1){
    document.write("Random coin value: Tails")
}
else{
    document.write("Random coin value: Heads")
}

// q6
let randomNum = Math.random()*100 +1
document.write("<h3>6. Random Number (1–100)</h3>");
document.write("Random number between 1 and 100: " + randomNum + "<br><br>");


// q7
let weightInput = +prompt('Enter your weight in kgs')
document.write(parseFloat(weightInput))

// q8
let secretNum = Math.floor(Math.random()*10)+1
let userInput = +prompt('Enter the secret number')
if (userInput===secretNum){
    document.write('Congratulations you have entered the right number')
}
else{
    document.write('Try again secret number is '+secretNum)
}





// CHAPTER 30-34
// q1
let currentDate = new Date()
document.write(currentDate)


// q2
let now = new Date();
let month = now.getMonth() + 1; 
document.write(month);

// q3

var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
alert(days[new Date().getDay()]);

// q4
var d = new Date().getDay();
if (d === 0 || d === 6) alert("It’s Fun day");

// q5
var date = new Date().getDate();
if (date < 16) alert("First fifteen days of the month");
else alert("Last days of the month");

// q6
minutesSinceEpoch = Math.floor(Date.now() / (1000 * 60));
alert(minutesSinceEpoch);

// q7
var hour = new Date().getHours();
if (hour < 12) alert("Its AM");
else alert("Its PM");

// q8
var laterDate = new Date(2020, 11, 31);
alert(laterDate);

// q9
var ramadanStart = new Date(2015, 5, 18);
var today = new Date();
var diffDays = Math.floor((today - ramadanStart) / (1000 * 60 * 60 * 24));
alert(diffDays + " days have passed since 1st Ramadan");

// q10
var refDate = new Date();
var start2015 = new Date(2015, 0, 1);
var secondsElapsed = Math.floor((refDate - start2015) / 1000);
document.write("Seconds elapsed since Jan 1, 2015: " + secondsElapsed + "<br>");

// q11
var currentDate1 = new Date();
currentDate.setHours(currentDate1.getHours() + 1);
document.write(currentDate1 + "<br>");

// q12
var backDate = new Date();
backDate.setFullYear(backDate.getFullYear() - 100);
alert(backDate);

// q13
var age = prompt("Enter your age:");
var birthYear = new Date().getFullYear() - age;
document.write("Your birth year is: " + birthYear + "<br>");

// q14
var customerName = "Wali Ahmed";
var currentMonth = new Date().toLocaleString("default", { month: "long" });
var units = 410;
var chargesPerUnit = 16;
var netAmount = units * chargesPerUnit;
var lateSurcharge = 350;
var grossAmount = netAmount + lateSurcharge;

document.write("<h2>K-Electric Bill</h2>");
document.write("Customer Name: " + customerName + "<br>");
document.write("Current Month: " + currentMonth + "<br>");
document.write("Number of units: " + units + "<br>");
document.write("Charges per unit: " + chargesPerUnit.toFixed(2) + "<br>");
document.write("Net Amount Payable (within Due Date): " + netAmount.toFixed(2) + "<br>");
document.write("Late Payment Surcharge: " + lateSurcharge.toFixed(2) + "<br>");
document.write("Gross Amount Payable (after Due Date): " + grossAmount.toFixed(2));
