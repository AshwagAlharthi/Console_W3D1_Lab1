// Qusetion No1
let height = 5;
let width = 10;
console.log("The area of the rectangle is: " , width * height);

// Question No2
// °C to °F
let c_degree1 = 30;
let f_degree1 =  c_degree1 * (9/5) + 32;
console.log(c_degree1 + "°C is " + f_degree1 + "°F");
// °F to °C
let f_degree2 = 68;
let c_degree2 = (f_degree2 - 32) * 5/9;
console.log(f_degree2 + "°F is " + c_degree2 + "°C");

// Questtion No3
let hour = 12 ;
let second = hour * 3600;
console.log(hour + " hours = " + second + " Seconds");


// Question No4
let thingOne = `Ashwag`, thingTwo = `Alharthi`;
console.log(thingOne + ' ' + thingTwo);

// Question No5
var bill = 10.25 + 3.99 + 7.15;
var tip = bill * 0.15 ;
var total = bill + tip;
console.log(total);

// Question No6
var adjective1 = "amazing";
var adjective2 = "fun";
var adjective3 = "entertaining";
var madLib = `The Intro to JavaScript course is ${adjective1}. James and Julia are so ${adjective2}. I cannot wait to work through the rest of this ${adjective3} content!`
console.log(madLib);

// Question No7
let firstName = "Ashwag";
let interest = "programming";
let hobby = "learning a new programming language";
let awesomeMessage = `Hi, my name is ${firstName}. I love ${interest}. In my spare time, I like to ${hobby}.`;
console.log(awesomeMessage);