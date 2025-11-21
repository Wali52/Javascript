// Q1
let arr = [];

// Q2
let StudentNames = new Array();


// Q3
let stringarr = ['apple', 'orange', 'banana'];

// Q4
let numArray = [1, 2, 3, 5, 8];

// Q5
let booleanArr = [true, false, false, true];

// Q6
let mixArray = ['Name', 19, true, 3.012];

// Q7
var education = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];
document.write('<h2>Qualification</h2>')
for (var i = 0; i < education.length; i++) {
    document.write((i + 1) + ") " + education[i] + "<br>");
}

// Q8
let stdName = ['Ali', 'Wali', 'Hamza'];
let score = [220, 421, 322];
let total = 500;
let percentage1 = (score[0] / total) * 100;
let percentage2 = (score[1] / total) * 100;
let percentage3 = (score[2] / total) * 100;

document.write(
    "Score of " + stdName[0] + " is " + score[0] +
    ". Percentage: " + percentage1 + "%<br>"
);
document.write(
    "Score of " + stdName[1] + " is " + score[1] +
    ". Percentage: " + percentage2 + "%<br>"
); document.write(
    "Score of " + stdName[2] + " is " + score[2] +
    ". Percentage: " + percentage3 + "%<br>"
);

// Q9
// Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

let colors = ['red','yellow','green','orange'];
document.write(colors[0], '<br>')
document.write(colors[1], '<br>')
document.write(colors[2], '<br>')
document.write(colors[3], '<br>')

let userInput = prompt('Enter the color name you want to add to the end')
let newAddition = (colors.push(userInput))
document.write(colors, '<br>')

let colorBegining1 = prompt('Enter the colors to add at the begining')
let colorBegining2 = prompt('Enter the colors to add at the begining')
let newAddition2 = colors.unshift(colorBegining1)
let newAddition3 = colors.unshift(colorBegining2)
document.write('colors after user added two more colors',colors, '<br>')

let deleteFirst = colors.shift()
document.write('Array of colors after deletion:',colors)

let deleteLastColor = colors.pop()
document.write(`Array after deletion of last color ${deleteLastColor}`)

let userInput2 = prompt()