//q1
function power(a, b) {
    let result = 1;
    for (let i = 0; i < b; i++) {
        result *= a;
    }
    return result;
}
console.log("Q1 - 2^5 =", power(2, 5));

//q2
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
let year = parseInt(prompt("Q2 - Enter a year:"));
console.log(year + " is a leap year:", isLeapYear(year));

//q3
function semiPerimeter(a, b, c) {
    return (a + b + c) / 2;
}
function triangleArea(a, b, c) {
    let S = semiPerimeter(a, b, c);
    return Math.sqrt(S * (S - a) * (S - b) * (S - c));
}
console.log("Q3 - Area of triangle:", triangleArea(5, 6, 7));

//q4
function average(m1, m2, m3) {
    return (m1 + m2 + m3) / 3;
}
function percentage(m1, m2, m3) {
    return ((m1 + m2 + m3) / 300) * 100; // assuming 100 marks per subject
}
function mainFunction(m1, m2, m3) {
    console.log("Q4 - Average:", average(m1, m2, m3));
    console.log("Q4 - Percentage:", percentage(m1, m2, m3) + "%");
}
mainFunction(85, 90, 95);

//q5
function indexOfCustom(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) return i;
    }
    return -1;
}
console.log("Q5 - Index of 'a' in 'javascript':", indexOfCustom("javascript", "a"));

//q6
function removeVowels(sentence) {
    return sentence.replace(/[aeiouAEIOU]/g, "");
}
console.log("Q6 - Without vowels:", removeVowels("Hello World"));

//q7
function countTwoVowelPairs(sentence) {
    let count = 0;
    let vowels = "aeiouAEIOU";
    for (let i = 0; i < sentence.length - 1; i++) {
        let pair = sentence[i] + sentence[i + 1];
        switch (true) {
            case vowels.includes(sentence[i]) && vowels.includes(sentence[i + 1]):
                count++;
                break;
        }
    }
    return count;
}
console.log("Q7 - Two vowel pairs count:", countTwoVowelPairs("Pleases read this application and give me gratuity"));

//q8
function toMeters(km) { return km * 1000; }
function toFeet(km) { return km * 3280.84; }
function toInches(km) { return km * 39370.1; }
function toCentimeters(km) { return km * 100000; }
let distanceKm = parseFloat(prompt("Q8 - Enter distance between cities (km):"));
console.log("Q8 - Meters:", toMeters(distanceKm));
console.log("Q8 - Feet:", toFeet(distanceKm));
console.log("Q8 - Inches:", toInches(distanceKm));
console.log("Q8 - Centimeters:", toCentimeters(distanceKm));

//q9
function overtimePay(hoursWorked) {
    let overtimeHours = hoursWorked > 40 ? hoursWorked - 40 : 0;
    return overtimeHours * 12;
}
let hours = parseInt(prompt("Q9 - Enter hours worked:"));
console.log("Q9 - Overtime pay:", overtimePay(hours));

//q10
function currencyNotes(amount) {
    let hundreds = Math.floor(amount / 100);
    let fifties = Math.floor((amount % 100) / 50);
    let tens = Math.floor((amount % 50) / 10);
    return { hundreds, fifties, tens };
}
let withdrawAmount = parseInt(prompt("Q10 - Enter amount in hundreds:"));
let notes = currencyNotes(withdrawAmount);
console.log(`Q10 - Notes: 100s=${notes.hundreds}, 50s=${notes.fifties}, 10s=${notes.tens}`);


// Chapter 43-48 in the html file

