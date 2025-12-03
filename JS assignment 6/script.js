// Q1
let firstName = prompt('Enter your first name');
let lastName = prompt('ENter your last name')
let fullName = firstName + lastName
alert(`Assalm o alikum ${fullName}`)

// Q2
let mobileModel = prompt('Enter your fav mobile model')
alert(`My fav phone is: ${mobileModel}`)
alert(mobileModel.length)

// Q3
var string = 'Pakistani'
alert(string.indexOf('n'));

// Q4
let string = "Hello World";
alert("The last index of 'l' is: " + string.lastIndexOf('l'));

// Q5
let word = "Pakistani";
document.write("Character at index 3: " + word.charAt(3));

// Q7
let city = "Hyderabad";
let replacedCity = city.replace("Hyder", "Islam");
document.write("After replacement: " + replacedCity);

// Q8
let message =
  "Ali and Sami are best friends. They play cricket and football together.";
let updatedMessage = message.replaceAll("and", "&");
document.write(updatedMessage);

// Q9
let str = "472";
let num = Number(str);

document.write("Value: " + str + "<br>Type: " + typeof str + "<br><br>");
document.write("Value: " + num + "<br>Type: " + typeof num);

// Q10
let userInput = prompt("Enter something:");
document.write("Uppercase: " + userInput.toUpperCase());

// Q11
let userWord = prompt("Enter a word:");
let titleCase = userWord[0].toUpperCase() + userWord.slice(1).toLowerCase();
document.write("Title Case: " + titleCase);

// Q12
let nums = 35.36;
let strs = nums.toString().replace(".", "");
document.write("Result: " + str);

// Q13
let username = prompt("Enter username:");
let invalidChars = ["@", ".", ",", "!"];
let isInvalid = false;

for (let i = 0; i < username.length; i++) {
  if (invalidChars.includes(username[i])) {
    isInvalid = true;
    break;
  }
}

if (isInvalid) {
  alert("Please enter a valid username (no @ . , ! allowed)");
} else {
  alert("Username accepted: " + username);
}

// // Q14
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let userSearch = prompt("Search item:").toLowerCase();

let index = A.indexOf(userSearch);

if (index !== -1) {
  alert(userSearch + " is available at index " + index);
} else {
  alert(userSearch + " is NOT available");
}

// // Q15
let password = prompt("Enter password:");

function isValidPassword(pwd) {
  if (pwd.length < 6) return false;
  if (!isNaN(pwd[0])) return false;
  if (!/[A-Za-z]/.test(pwd)) return false;
  if (!/[0-9]/.test(pwd)) return false;
  return true;
}

if (isValidPassword(password)) {
  alert("Password accepted");
} else {
  alert("Invalid password. Please enter a valid password.");
}

// // Q16
let university = "University of Karachi";
let arr = university.split(" ");

for (let i = 0; i < arr.length; i++) {
  document.write(arr[i] + "<br>");
}

// // Q17
let text = prompt("Enter something:");
let lastChar = text[text.length - 1];
document.write("Last character: " + lastChar);

// // Q18
let sentence = "The quick brown fox jumps over the lazy dog";
let count = sentence.toLowerCase().match(/the/g).length;

document.write("Number of occurrences of 'the': " + count);
