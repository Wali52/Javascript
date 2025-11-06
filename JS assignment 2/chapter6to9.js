// Q1
document.write("<h2>Q1: Arithmetic Operations</h2>");

var num = 10;

document.write("The value of num is: " + num + "<br><br>");

document.write("The value of ++num is: " + (++num) + "<br>");
document.write("Now the value of num is: " + num + "<br><br>");

document.write("The value of num++ is: " + (num++) + "<br>");
document.write("Now the value of num is: " + num + "<br><br>");

document.write("The value of --num is: " + (--num) + "<br>");
document.write("Now the value of num is: " + num + "<br><br>");

document.write("The value of num-- is: " + (num--) + "<br>");
document.write("Now the value of num is: " + num + "<br><br>");

// Q2
document.write("<h2>Q2: Output & Explanation</h2>");

var a = 2, b = 1;
var result = --a - --b + ++b + b--;

document.write("a is: " + a + "<br>");
document.write("b is: " + b + "<br>");
document.write("result is: " + result + "<br>");


// Q3
document.write("<h2>Q3: Greeting User</h2>");

var userName = prompt("Enter your name:");
document.write("Hello " + userName + "! Welcome to our website. <br><br>");


// Q4
document.write("<h2>Q4: Multiplication Table</h2>");

var num = prompt("Enter a number to show multiplication table:", 5);

document.write("Multiplication Table of " + num + "<br><br>");

document.write(num + " x 1 = " + (num * 1) + "<br>");
document.write(num + " x 2 = " + (num * 2) + "<br>");
document.write(num + " x 3 = " + (num * 3) + "<br>");
document.write(num + " x 4 = " + (num * 4) + "<br>");
document.write(num + " x 5 = " + (num * 5) + "<br>");
document.write(num + " x 6 = " + (num * 6) + "<br>");
document.write(num + " x 7 = " + (num * 7) + "<br>");
document.write(num + " x 8 = " + (num * 8) + "<br>");
document.write(num + " x 9 = " + (num * 9) + "<br>");
document.write(num + " x 10 = " + (num * 10) + "<br><br>");



// Q6
document.write("<h2>Q6: Marks Sheet</h2>");

var subject1 = prompt("Enter first subject name:");
var subject2 = prompt("Enter second subject name:");
var subject3 = prompt("Enter third subject name:");

var totalMarksEach = 100;

var obtainedSub1 = +prompt("Enter obtained marks for " + subject1 + ":");
var obtainedSub2 = +prompt("Enter obtained marks for " + subject2 + ":");
var obtainedSub3 = +prompt("Enter obtained marks for " + subject3 + ":");

var totalObtained = obtainedSub1 + obtainedSub2 + obtainedSub3;
var percentage = (totalObtained / (totalMarksEach * 3)) * 100;

document.write(`
<table border='1' cellpadding='10'>
    <tr>
        <th>Subject</th>
        <th>Total Marks</th>
        <th>Obtained Marks</th>
    </tr>
    <tr>
        <td>${subject1}</td>
        <td>${totalMarksEach}</td>
        <td>${obtainedSub1}</td>
    </tr>
    <tr>
        <td>${subject2}</td>
        <td>${totalMarksEach}</td>
        <td>${obtainedSub2}</td>
    </tr>
    <tr>
        <td>${subject3}</td>
        <td>${totalMarksEach}</td>
        <td>${obtainedSub3}</td>
    </tr>
</table>

<br><br>
<b>Total Marks:</b> ${totalMarksEach * 3} <br>
<b>Obtained Marks:</b> ${totalObtained} <br>
<b>Percentage:</b> ${percentage.toFixed(2)}%
`);

