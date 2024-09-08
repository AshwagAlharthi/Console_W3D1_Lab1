// Qusetion No1
let width = 10;
let height = 10;
let result = width * height
console.log("The area of the rectangle is: " , result);

// Question No2
let c_degree = 30;
let f_degree =  c_degree * (9/5) + 32;
console.log(c_degree+"°C is " + f_degree + "°F");


// Questtion No3
let hour = 12 ;
let second = hour * 3600;
console.log(hour + " hours = " + second + " Seconds");


// Question No4
/*
 * REQUIREMENTS
 * 1. Your code should have two variables -  `thingOne` and `thingTwo`
 * 2. Your code should only have one `console.log` statement
 * 3. Your code should print out the values of `thingOne` and `thingTwo` using concatenation
 * 4. Your code should contain semicolons at the end of each line
 */
let thingOne = `Ashwag`, thingTwo = `Alharthi`;
console.log(`${thingOne} ${thingTwo}`);


// Question No5
/*
 * REQUIREMENTS
 * 1. Your code should have the variables - `bill`, `tip`, and `total`
 * 2. Your variables - `bill`, `tip`, and `total` should be declared using the `var` keyword
 * 3. Your variable `bill` should be a number, having a value equal to the result of `10.25 + 3.99 + 7.15`
 * 4. Your variable `tip` should be a number, having a value equal to 15% of the `bill`
 * 5. Your variabe `total` should be a number, having a value equal to the `bill` and `tip` added together
 * 6. Your code should print the total to the console
 */

var bill = 10.25 + 3.99 + 7.15; 21.39
var tip = bill * 0.15 ; 3,2085
var total = bill + tip;
console.log(total);

// Question No6
/*
 * REQUIREMENTS
 * 1. Your code should have the variables - `adjective1`, `adjective2`, `adjective3`, and `madLib`.
 *
 * 2. Use the adjective1, adjective2, and adjective3 variables to set the madLib variable to the message:
 * 'The Intro to JavaScript course is amazing. James and Julia are so fun. I cannot wait to work through the rest of this entertaining content!'
 *
 * 3. Your madLib should match the given string
 * 4. The madLib variable should be printed to the console
 */

var adjective1 = "amazing";
var adjective2 = "fun";
var adjective3 = "entertaining";
var madLib = `The Intro to JavaScript course is ${adjective1}. James and Julia are so ${adjective2}. I cannot wait to work through the rest of this ${adjective3} content!`
console.log(madLib);