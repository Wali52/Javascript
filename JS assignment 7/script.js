// q1
alert("Welcome to JavaScript!");

let userName = prompt("What is your name?");
alert("Your name is: " + userName);

let favColor = prompt("Your favourite color?");
alert("Your colour is: " + favColor);


// q2
let firstName = "Wali";
let lastName = "Ahmed";
alert(firstName + " " + lastName);

let myCity = "Karachi";
alert("You live in " + myCity);

let myHobby = "Coding";
alert("My hobby is " + myHobby);


// q3
let a = 10;
let b = 20;
alert("Sum = " + (a + b));

let marks = 55;
alert(marks >= 50 ? "Pass" : "Fail");

let age = 22;
if (age > 18) alert("You are above 18");


// q4
let my_var = 1, user123 = 2, totalValue = 3;
alert("3 legal variable names created");

alert("Illegal names example tried (not executing)");

let nameList = ["my_var", "user123", "totalValue"];
alert(nameList.join(", "));


// q5
let n1 = 5, n2 = 3;
alert("Sum=" + (n1 + n2) + " Diff=" + (n1 - n2));

alert("Product=" + (n1 * n2) + " Quotient=" + (n1 / n2) + " Remainder=" + (n1 % n2));

let inc = 7;
inc++;
alert("Incremented value = " + inc);


// q6
let numX = 10;
numX++;
numX--;
alert("After ++ and -- " + numX);

let numY = 10;
numY += 5;
numY -= 3;
alert("+= and -= result: " + numY);

let numZ = 4;
numZ *= 3;
numZ /= 2;
alert("*= and /= result: " + numZ);


// q7
let p = (2 + 3) * 4;
alert(p);

let q1 = 5, q2 = 2, q3 = 3;
alert(q1 + q2 * q3 - 1);

let r = (10 - (2 + 3)) * 2;
alert(r);


// q8
let fn = "Ali", ln = "Raza";
alert(fn + " " + ln);

let city = "Lahore";
alert("Welcome from " + city);

alert("Hello " + fn + ", from " + city + "!");


// q9
let pc = prompt("Fav color?");
alert("Your favorite color is " + pc);

let pa = prompt("Your age?");
alert("Age = " + pa);

let pf = prompt("Fav fruit?");
alert("Fruit: " + pf);


// q10
let x = 12;
if (x > 10) alert("Number is greater than 10");

let m = 80;
if (m >= 50) alert("Pass");

let ag = 15;
if (ag < 18) alert("Minor");


// q11
alert(5 > 3);

if (5 == 5) alert("Numbers are equal");
else alert("Not equal");

alert(7 <= 10);


// q12
let mm = 85;
if (mm >= 90) alert("A");
else if (mm >= 70) alert("B");
else alert("C");

let ag2 = 10;
if (ag2 < 12) alert("Child");
else if (ag2 < 18) alert("Teen");
else alert("Adult");

let temp = 25;
if (temp > 30) alert("Hot");
else if (temp >= 20) alert("Warm");
else alert("Cold");


// q13
let numCheck = 6;
if (numCheck > 0 && numCheck % 2 === 0) alert("Positive & Even");

let markCheck = 75;
if (markCheck >= 50 && markCheck <= 100) alert("Valid Marks");

let div = 15;
if (div % 3 === 0 && div % 5 === 0) alert("Divisible by 3 & 5");


// q14
let ag3 = 20, hasID = true;
if (ag3 >= 18) {
    if (hasID) alert("Allowed");
    else alert("Not Allowed");
}

let num4 = 8;
if (num4 > 0) {
    if (num4 % 2 === 0) alert("Positive Even");
}

let mk = 60, extraCredit = true;
if (mk >= 50) {
    if (extraCredit) alert("Passed with extra credit");
}


// q15
let fruits = ["Apple", "Banana", "Mango", "Grapes", "Orange"];
alert(fruits);

let nums = [10, 20, 30, 40];
alert(nums[0] + " , " + nums[nums.length - 1]);

let colors = ["Red", "Green", "Blue"];
alert(colors);


// q16
let arr1 = ["Apple", "Banana"];
arr1.push("Mango");
alert(arr1);

arr1.pop();
alert(arr1);

arr1.unshift("Kiwi");
arr1.shift();
alert(arr1);


// q17
let arr2 = ["A", "B", "C"];
arr2.splice(1, 0, "X");
alert(arr2);

arr2.splice(2, 1);
alert(arr2);

let part = arr2.slice(0, 2);
alert(part);


// q18
for (let i = 1; i <= 5; i++) alert(i);

let arr3 = ["Red", "Blue", "Green"];
for (let i = 0; i < arr3.length; i++) alert(arr3[i]);

for (let i = 1; i <= 10; i++) if (i % 2 !== 0) alert(i);


// q19
let arr4 = [10, 5, -3, 7];
for (let i = 0; i < arr4.length; i++) {
    if (arr4[i] < 0) break;
    alert(arr4[i]);
}

let arr5 = [1, 4, 7, 8];
let flag = false;
for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] % 2 === 0) flag = true;
}
alert("Flag: " + flag);

let arr6 = [12, 40, 55, 70];
for (let i = 0; i < arr6.length; i++) {
    if (arr6[i] > 50) break;
    alert(arr6[i]);
}


// q20
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 10; j++) {
        alert(i + " x " + j + " = " + (i * j));
    }
}

let arr2D = [[1,2],[3,4],[5,6]];
for (let i = 0; i < arr2D.length; i++) {
    for (let j = 0; j < arr2D[i].length; j++) {
        alert(arr2D[i][j]);
    }
}

let a1 = [1,2], a2 = [3,4];
for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < a2.length; j++) {
        alert(a1[i] + a2[j]);
    }
}


// q21
let text1 = "javascript";
alert(text1.toUpperCase());

let text2 = "HELLO";
alert(text2.toLowerCase());

let word = "hello";
alert(word.charAt(0).toUpperCase() + word.slice(1));


// q22
let st = "HelloWorld";
alert(st.length);
alert(st.slice(0, 3));
alert(st.slice(st.length - 3));


// q23
let s1 = "This is JavaScript";
alert(s1.indexOf("JavaScript"));

alert(s1.lastIndexOf("i"));

alert(s1.includes("Script"));


// q24
let s2 = "Coding";
alert(s2.charAt(2));
alert(s2.charAt(s2.length - 1));
alert(s2.charAt(Math.floor(s2.length / 2)));


// q25
let rep = "I love JavaScript";
alert(rep.replace("JavaScript", "Programming"));

alert(rep.replace(/o/g, "*"));

alert(rep.replace("love", "enjoy"));
