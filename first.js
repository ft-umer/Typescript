// Assignment 5
// 1. Write a ts program to find maximum between two numbers.
alert("find maximum between two numbers");
var number1 = prompt("Enter first number");
var nums1 = Number(number1);
var number2 = prompt("Enter second number");
var nums2 = Number(number2);
var num1 = Number(nums1);
var num2 = Number(nums2);
if (num1 > num2) {
    console.log(num1 + " is maximum");
}
else if (num2 > num1) {
    console.log(num2 + " is maximum");
}
// 2. Write a ts program to find maximum between three numbers.
alert("find maximum between three numbers");
var number3 = prompt("Enter first number");
var nums3 = Number(number3);
var number4 = prompt("Enter second number");
var nums4 = Number(number4);
var number5 = prompt("Enter first number");
var nums5 = Number(number5);
var num1 = Number(nums3);
var num2 = Number(nums4);
var num3 = Number(nums5);
if (num1 > num2) {
    console.log(num1 + " is maximum");
}
else if (num2 > num3) {
    console.log(num2 + " is maximum");
}
else {
    console.log(num3 + " is maximum");
}
// 3. Write a ts program to check whether a number is negative, positive or zero.
alert("check whether a number is negative, positive or zero");
var number = prompt("check whether a number is negative, positive or zero.");
var num = Number(number);
if (num > 0) {
    console.log("The number is positive");
}
else if (num < 0) {
    console.log("The number is negative");
}
else {
    console.log("The number is zero");
}
// Write a ts program to check whether a number is divisible by 5 and 11 or not.
alert("check whether a number is divisible by 5 and 11 or no");
var number = prompt("check whether a number is divisible by 5 and 11 or not");
var num = Number(number);
if (num % 5 == 0) {
    console.log(num + " is divisible by 5");
}
else if (num % 11 == 0) {
    console.log(num + " is divisible by 11");
}
else {
    console.log("The number is not divisile by 5 or 11");
}
// Write a ts program to check whether a number is even or odd.
alert("check whether a number is even or odd");
var number = prompt("check whether a number is even or odd");
var num = Number(number);
if (num % 2 == 0) {
    console.log(num + " is even");
}
else {
    console.log(num + " is odd");
}
// Write a ts program to check whether a year is leap year or not.
alert("check whether a year is leap year or not");
var years = prompt("check whether a year is leap year or not");
var year = Number(years);
if (year % 4 == 0) {
    console.log(year + " is a leap year");
}
else {
    console.log(year + " is not a leap year");
}
// Write a ts program to check whether a character is uppercase or lowercase alphabet.
alert("check whether a character is uppercase or lowercase alphabet");
var input = prompt("check whether a character is uppercase or lowercase alphabet");
var character = String(input);
if (character >= 'A' && character <= 'Z') {
    console.log("The Character is Uppercase");
}
else if (character >= 'a' && character <= 'z') {
    console.log("The Character is Lowercase");
}
else {
    console.log("You did not enter any alphabet");
}
// 12. Write a ts program to input month number and print number of days in that month.
alert("input month number and print number of days in that month");
var userInput = prompt("input month number and print number of days in that month.");
var month = Number(userInput);
var day_30 = "30 days";
var day_31 = "30 days";
var day_28 = "28 or 29 days";
if (month == 1) {
    console.log("January has " + day_31);
}
else if (month == 2) {
    console.log("Fabruary has " + day_28);
}
else if (month == 3) {
    console.log("March has " + day_31);
}
if (month == 4) {
    console.log("April has " + day_30);
}
else if (month == 5) {
    console.log("May has " + day_31);
}
else if (month == 6) {
    console.log("June has " + day_30);
}
else if (month == 7) {
    console.log("july has " + day_31);
}
else if (month == 8) {
    console.log("August has " + day_31);
}
else if (month == 9) {
    console.log("September has " + day_30);
}
else if (month == 10) {
    console.log("Octuber has " + day_31);
}
else if (month == 11) {
    console.log("November has " + day_30);
}
else if (month == 12) {
    console.log("December has " + day_31);
}
else {
    console.log("Please enter month number between (1-12).");
}
// 7. Write a ts program to check whether a character is alphabet or not.
alert("check whether a character is alphabet or not");
var input = prompt("check whether a character is alphabet or not");
var character = String(input);
if ((character >= 'A' && character <= 'Z') || (character >= 'a' && character <= 'z')) {
    console.log("The character is an alphabet");
}
else {
    console.log("The character is not an alphabet");
}
// 11. Write a ts program to input week number and print week day.
alert("input week number and print week day");
var userInput = prompt(" input week number and print week day");
var week = Number(userInput);
if (week == 1) {
    console.log("Its Monday");
}
else if (week == 2) {
    console.log("Its Tuesday");
}
else if (week == 3) {
    console.log("Its wednesday");
}
else if (week == 4) {
    console.log("Its Thursday");
}
else if (week == 5) {
    console.log("Its Friday");
}
else if (week == 6) {
    console.log("Its Saturday");
}
else if (week == 7) {
    console.log("Its Sunday");
}
else {
    console.log("Invalid week day");
}
// 9. Write a ts program to input any character and check whether it is alphabet, digit or special character.
alert("input any character and check whether it is alphabet, digit or special character");
var input = prompt("input any character and check whether it is alphabet, digit or special character");
var characters = input;
if ((characters >= 'A' && characters <= 'Z') || (characters >= 'a' && characters <= 'z')) {
    console.log("The character is an alphabet");
}
else if (characters >= -Infinity && characters <= +Infinity) {
    console.log("The character is a digit");
}
else {
    console.log("It is a special character");
}
// 8. Write a ts program to input any alphabet and check whether it is vowel or consonant.
alert("input any alphabet and check whether it is vowel or consonant");
var alphabet = prompt("input any alphabet and check whether it is vowel or consonant");
var letter = String(alphabet);
if (letter == "A" || letter == "E" || letter == "I" || letter == "O" || letter == "U") {
    console.log("The alphabet is vowel");
}
else if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
    console.log("The alphabet is vowel");
}
else {
    console.log("The alphabet is consnant");
}
// Write a ts program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F
var total = prompt("Enter total marks");
alert("Enter subjects marks to calculate percentage");
var phy = prompt("Enter Physics Marks");
var chem = prompt("Enter Chemistry Marks");
var eng = prompt("Enter English Marks");
var math = prompt("Enter Mathematics Marks");
var urdu = prompt("Enter Urdu Marks");
var is = prompt("Enter Islamiyat Marks");
var total_marks = Number(total);
var Physics = Number(phy);
var Chemistry = Number(chem);
var English = Number(eng);
var Mathematics = Number(math);
var Urdu = Number(urdu);
var Islamiyat = Number(is);
var obt_marks = Physics + Chemistry + English + Mathematics + Urdu + Islamiyat;
var percentage = obt_marks / total_marks * 100;
console.log("The percentage is " + percentage + " %");
console.log("and");
if (percentage >= 90) {
    console.log("Grade A");
}
else if (percentage >= 80) {
    console.log("Grade B");
}
else if (percentage >= 70) {
    console.log("Grade C");
}
else if (percentage >= 60) {
    console.log("Grade D");
}
else if (percentage >= 40) {
    console.log("Grade E");
    console.log(obt_marks);
}
else if (percentage < 40) {
    console.log("Grade F");
}
// Write a ts program to calculate profit or loss.
alert("calculate profit or loss");
var sell = prompt("Enter the selling price");
var cost = prompt("Enter the cost price");
var selling_price = Number(sell);
var cost_price = Number(cost);
var profit = selling_price - cost_price;
var loss = cost_price - selling_price;
if (selling_price > cost_price) {
    console.log("The profit is " + profit);
}
else {
    console.log("the loss is " + loss);
}
// Write a ts program to input angles of a triangle and check whether triangle is valid or not.
alert("input angles of a triangle and check whether triangle is valid or not");
var first_angle = prompt("Enter the first angle");
var second_angle = prompt("Enter the second angle");
var third_angle = prompt("Enter the third angle");
var a = Number(first_angle);
var b = Number(second_angle);
var c = Number(third_angle);
if (a == 90 && b == 90 && c == 90) {
    console.log("The Triangle is valid");
}
else {
    console.log("The Triangle is not valid");
}
// 15. Write a ts program to input all sides of a triangle and check whether triangle is valid or not.
alert("input all sides of a triangle and check whether triangle is valid or not");
var first_side = prompt("Enter the first side");
var second_side = prompt("Enter the second side");
var third_side = prompt("Enter the third side");
var a = Number(first_side);
var b = Number(second_side);
var c = Number(third_side);
var a = 32;
var b = 23;
var c = 32;
if (a + b > c || a + c > b || b + c > a) {
    console.log("The Triangle is valid");
}
else {
    console.log("The Triangle is not valid");
}
// 20. Write a ts program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%
alert("input basic salary of an employee and calculate its Gross salary");
var salary = prompt("input basic salary of an employee and calculate its Gross salary");
var basic_salary = Number(salary);
var medical = prompt("input medical allowance of an employee");
var ma = Number(medical);
if (basic_salary <= 10000) {
    var hra = basic_salary * 20 / 100;
    var da = basic_salary * 80 / 100;
    var gross_salary = basic_salary + hra + da + ma;
    console.log("The Gross salary of employee is " + gross_salary);
}
else if (basic_salary <= 20000) {
    var hra = basic_salary * 25 / 100;
    var da = basic_salary * 90 / 100;
    var gross_salary = basic_salary + hra + da + ma;
    console.log("The Gross salary of employee is " + gross_salary);
}
else if (basic_salary > 20000) {
    var hra = basic_salary * 30 / 100;
    var da = basic_salary * 95 / 100;
    var gross_salary = basic_salary + hra + da + ma;
    console.log("The Gross salary of employee is " + gross_salary);
}
// Write a ts program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill
alert("input electricity unit charges and calculate total electricity bill");
var userInput = prompt("input electricity unit charges and calculate total electricity bill");
var units = Number(userInput);
// var units :number = 56
var bill = 0;
if (units <= 50) {
    bill = ((units * 0.50) / 100) * 20 + units * 0.50;
    console.log("For first 50 units the bill is " + bill + "Rs");
}
else if (units <= 150) {
    bill = (((50 * 0.50 + (units - 50) * 0.75) / 100) * 20) + 50 * 0.50 + (units - 50) * 0.75;
    console.log("For next 100 units the bill is " + bill + "Rs");
}
else if (units <= 250) {
    bill = (((50 * 0.50 + 100 * 0.75 + (units - 150) * 1.20) / 100) * 20) + 50 * 0.50 + 100 * 0.75 + (units - 150) * 1.20;
    console.log("For next 100 to 100 units the bill is " + bill + "Rs");
}
else if (units > 250) {
    bill = (((50 * 0.50 + 100 * 0.75 + 150 * 1.20 + (units - 250) * 1.50) / 100) * 20) + 50 * 0.50 + 100 * 0.75 + 150 * 1.20 + (units - 250) * 1.50;
    console.log("For above 250 units the bill is " + bill + "Rs");
}
