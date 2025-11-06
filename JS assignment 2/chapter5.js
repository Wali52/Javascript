var n1 = +prompt('Enter first number:');
var n2 = +prompt('Enter second number:');

var sum = n1 + n2;
document.write(`Addition of ${n1} and ${n2} is: ${sum} <br><br>`)


var subtract = n1 - n2;
document.write(`Subtraction of ${n1} and ${n2} is: ${subtract} <br><br>`)

var multiply = n1 * n2;
document.write(`Multiplication of ${n1} and ${n2} is: ${multiply} <br><br>`)

var modulus = n1 % n2;
document.write(`Modulus of ${n1} and ${n2} is: ${modulus} <br><br>`)

var division = n1 / n2;
document.write(`Division of ${n1} and ${n2} is: ${division} <br><br> `)


// Q3
var variable;
document.write(`Value after variable declaration is: ${variable} <br><br>`);

variable = 52;
document.write(`Initial value: ${variable} <br><br>`);

variable++;
document.write(`Value after increment is: ${variable} <br><br>`);

variable = variable + 7;
document.write(`Value after addition is: ${variable} <br><br>`);

variable--;
document.write(`Value after decrement is: ${variable} <br><br>`);

var remainder = variable % 3;
document.write(`The remainder is: ${remainder} <br><br>`);


// Q4
var ticketPrice = 600;  
var totalCost = ticketPrice * 5;

document.write("Total cost to buy 5 tickets to a movie is " + totalCost + " PKR");

// Q5
var number = +prompt("Enter a number to show its multiplication table:");

document.write(`<h2>Multiplication Table of ${number}</h2>`);

document.write(`${number} x 1 = ${number * 1} <br>`);
document.write(`${number} x 2 = ${number * 2} <br>`);
document.write(`${number} x 3 = ${number * 3} <br>`);
document.write(`${number} x 4 = ${number * 4} <br>`);
document.write(`${number} x 5 = ${number * 5} <br>`);
document.write(`${number} x 6 = ${number * 6} <br>`);
document.write(`${number} x 7 = ${number * 7} <br>`);
document.write(`${number} x 8 = ${number * 8} <br>`);
document.write(`${number} x 9 = ${number * 9} <br>`);
document.write(`${number} x 10 = ${number * 10} <br>`);

// Q6
var celsius = 25;

var fahrenheit = (celsius * 9/5) + 32;
document.write(`${celsius}°C is ${fahrenheit}°F <br><br>`);


var fahrenheitTemp = 70;

var celsiusTemp = (fahrenheitTemp - 32) * 5/9;
document.write(`${fahrenheitTemp}°F is ${celsiusTemp}°C`);


// Q7
var priceItem1 = 650;         
var priceItem2 = 300;         

var quantityItem1 = 3;        
var quantityItem2 = 2;        

var shippingCharges = 200;    

var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

document.write("<h2>Shopping Cart</h2>");
document.write("Price of item 1 is " + priceItem1 + "<br>");
document.write("Quantity of item 1 is " + quantityItem1 + "<br><br>");

document.write("Price of item 2 is " + priceItem2 + "<br>");
document.write("Quantity of item 2 is " + quantityItem2 + "<br><br>");

document.write("Shipping Charges: " + shippingCharges + "<br><br>");

document.write("Total cost of your order is: " + totalCost + " PKR");


// Q8
var totalMarks = 500;        
var marksObtained = 420;     

var percentage = (marksObtained / totalMarks) * 100;

document.write("<h2>Marks Sheet</h2>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%");


// Q9 - Currency Conversion
document.write("<h2>Q9: Currency in PKR</h2>");
var totalPKR = (10 * 104.80) + (25 * 28);
document.write("Total Currency in PKR: " + totalPKR + "<br><br>");

// Q10 - Arithmetic Operations
document.write("<h2>Q10: Arithmetic Result</h2>");
var number = 10;
var result = ((number + 5) * 10) / 2;
document.write("Result: " + result + "<br><br>");

// Q11 - Age Calculator
document.write("<h2>Q11: Age Calculator</h2>");
var currentYear = 2025;
var birthYear = 2003;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;
document.write(`They are either ${age2} or ${age1} years old.<br><br>`);

// Q12 - Geometrizer (Circle)
document.write("<h2>Q12: The Geometrizer</h2>");
var radius = 20;
var pi = 3.142;
var circumference = 2 * pi * radius;
document.write(`The circumference is ${circumference} <br>`);
var area = pi * radius * radius;
document.write(`The area is ${area} <br><br>`);

// Q13 - Lifetime Supply Calculator
document.write("<h2>Q13: Lifetime Supply Calculator</h2>");
var favoriteSnack = "Chocolate Chip Cookies";
var currentAge = 20;
var maxAge = 80;
var snacksPerDay = 3;
var totalSnacks = (maxAge - currentAge) * 365 * snacksPerDay;
document.write(`You will need ${totalSnacks} ${favoriteSnack} to last you until the ripe old age of ${maxAge}. <br><br>`);
