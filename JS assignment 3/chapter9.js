// Q1
let cityName = prompt("Enter your city name")
if (cityName =='Karachi') {
    alert('Welcome to the city of lights')
}
else{
    alert('Hint: It is the city of lights')
}



// Q2
let gender = prompt('Enter your gender')
if (gender=='male') {
    alert('Good Morning Sir')
}
else if (gender=='female'){
    alert('Good Morning Ma’am')
}
else{
    alert('Enter a correct gender')
}



// Q3
let color = prompt('Enter the color for traffic signal')
if (color=='red') {
    alert('You must stop!!!')

}
else if(color=='yellow'){
    alert('Be ready to move')
}
else if(color=='green'){
    alert('Move now')
}
else{
    alert('stop')
}



// Q4
let remainingFuel = +prompt('Enter remaining fuel in car in litres')
if (remainingFuel<0.25) {
    alert('Please refill the fuel in your car')   
}
else{
    alert('Just Drive!')
}



// Q5
// a.var; a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }
// b.var; b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
// c.var; c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }
// d.var; materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
// e.if(true){
//     alert("True");
// }
// if (false) {
//     alert("False");
// }



// f.if("car" < "cat"){
//     alert("car is smaller than cat");
// }


// Q6
let subject1 = parseFloat(prompt("Enter marks of Subject 1:"));
let subject2 = parseFloat(prompt("Enter marks of Subject 2:"));
let subject3 = parseFloat(prompt("Enter marks of Subject 3:"));
let totalMarks = parseFloat(prompt("Enter total marks:"));

let marksObtained = subject1 + subject2 + subject3;
let percentage = (marksObtained / totalMarks) * 100;

let grade, remarks;

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}

document.write("<h2>Marks Sheet</h2>");
document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks);



// Q7
let a = 4;
let user = +prompt('Enter the guessed number')
if (user==4) {
    alert('Bingo! Correct answer')
}
else if (user==++a){
    alert('Close enough to the correct answer')
}
else{
    alert('You guessed wrong Try Again!!!')
}


// Q8
let number = prompt("Enter a number:");
number = Number(number);
if (number % 3 === 0) {
    alert(number + " is divisible by 3.");
} else {
    alert(number + " is not divisible by 3.");
}



// Q9
let num = +prompt('Enter a number')
if (num % 2 === 0){
    alert('The number is even')
} else{
    alert('The number is odd')
}




// Q10
let temperature = prompt("Enter the temperature:");
temperature = Number(temperature);
if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today's Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today's weather is so Cool.");
} else {
    alert("It's very cold today.");
}

// Q11
let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
let operation = prompt("Enter the operation (+, -, *, /, %):");
let result;
if (operation === "+") {
    result = num1 + num2;
} else if (operation === "-") {
    result = num1 - num2;
} else if (operation === "*") {
    result = num1 * num2;
} else if (operation === "/") {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        result = "Error! Division by zero.";
    }
} else if (operation === "%") {
    if (num2 !== 0) {
        result = num1 % num2;
    } else {
        result = "Error! Division by zero.";
    }
} else {
    result = "Invalid operation!";
}
alert("Result: " + result);

