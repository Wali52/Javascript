// Q1
let emptyArr = [];
emptyArr.push([]);
emptyArr.push([]);

// Q2

let emptyArrr = [];
emptyArrr.push([0,1,2,3]);
emptyArrr.push([1,0,2,1]);
emptyArrr.push([1,2,3,4]);

console.log(emptyArrr);

// Q3
for (let i = 1; i <=10; i++) {
    console.log(i)
    
}


// Q4
let tableNum = +prompt('Enter a number');
let tableLength = +prompt('Enter table length to print');

for (let i = 1; i <= tableLength; i++) {
    console.log(tableNum + " x " + i + " = " + (tableNum * i));
}


// Q5
let fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];

for (let i = 0; i < fruits.length; i++) {

    console.log(`Element at index ${i} is ${fruits[i]}`);
}

// Q6
document.write('<h3>Counting Series</h3>')
let countingArr = []
for (let i=1; i<=15;i++){
    countingArr.push(i)
}
document.write(countingArr)


document.write('<h3>Reverse Counting</h3>')
let ReverseArr =[]
for(let i=10;i>=1;i--){
    ReverseArr.push(i)
}
document.write(ReverseArr)


document.write('<h3>Even Counting</h3>')
let evenCount =[]
for(i=1;i<=20;i++){
    if (i%2 ===0) {
        evenCount.push(i)
    }
}
document.write(evenCount)


document.write('<h3>ODD Counting</h3>')
let oddCount =[]
for(i=1;i<=20;i++){
    if (i%2 !==0) {
        oddCount.push(i)
    }
}
document.write(oddCount)


document.write('<h3>Series</h3>');
let series = [];
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        series.push(i + "k");
    }
}

document.write(series.join(", "));



// Q7
let bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];

let userInput = prompt("Welcome to ABC Bakery. What do you want to order?");

let foundIndex = bakeryItems.indexOf(userInput.toLowerCase());

if (foundIndex !== -1) {
    alert(userInput + " is available at index " + foundIndex + " in our bakery");
} else {
    alert("We are sorry. " + userInput + " is not available in our bakery");
}

// Q8
let A = [24, 53, 78, 91, 12];

let largest = A[0];

for (let i = 1; i < A.length; i++) {
    if (A[i] > largest) {
        largest = A[i];
    }
}

document.write("Array items: " + A.join(", ") + "<br>");
document.write("The largest number is " + largest);

// Q9
let B = [24, 53, 78, 91, 12];

let smallest = B[0];

for (let i = 1; i < B.length; i++) {
    if (B[i] < smallest) {
        smallest = A[i];
    }
}

document.write("Array items: " + B.join(", ") + "<br>");
document.write("The smallest number is " + smallest);


// 10
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        document.write(i + ", ");
    }
}
