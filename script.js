
/**
* The first program*/
// console.log("Hello, World!");
// console.log("I");
// console.log();
// console.log("know");
// console.log();
// console.log("JavaScript");

/**
* The second program*/
// console.log("A cat");
// console.log();
// console.log("says");
// console.log();
// console.log("meow");



/* whitespace */
//JavaScript bundlers make the JavaScript code lighter and faster to load in web browsers.
// let formatted = true; 
// if (formatted) {
//   console.log('The code is easy to read');
// }

/* statement */
//A simple statement is concluded by a semicolon (;).
// let message = "Welcome to JavaScript";
// console.log(message);

/* Blocks */
// A block is delimited by a pair of curly brackets {}.
// if (window.localStorage) {
//   console.log('The local storage is supported');
// }

/* Initialize a variable */
// let message = "Hello",
//     counter = 100; 
// console.log(message);


/* Change a variable */
// let message = "Hello";
// message = 'Bye';
// console.log(message);

/* Undefined vs. undeclared variables */
// let message;
// console.log(message); 

/*  Implicit Conversion to String */
// // numeric string used with + gives string type
// let result;
// result = '3' + 2; 
// console.log(result) // "32"
// result = '3' + true; 
// console.log(result); // "3true"
// result = '3' + undefined; 
// console.log(result); // "3undefined"
// result = '3' + null; 
// console.log(result); // "3null"

/* Implicit Conversion to Number */
// // numeric string used with - , / , * results number type
// let result;
// result = '4' - '2'; 
// console.log(result); 
// result = '4' - 2;
// console.log(result); 
// result = '4' * 2;
// console.log(result); 
// result = '4' / 2;
// console.log(result); 

/* Implicit Boolean Conversion to Number */
// // if boolean is used, true is 1, false is 0
// let result;
// result = '4' - true;
// console.log(result); 
// result = 4 + true;
// console.log(result); 
// result = 4 + false;
// console.log(result); 

/* null Conversion to Number */
// // null is 0 when used with number
// let result;
// result = 4 + null;
// console.log(result);  
// result = 4 - null;
// console.log(result);  

/* undefined used with number, boolean or null */
// // Arithmetic operation of undefined with number, boolean or null gives NaN
// let result;
// result = 4 + undefined;
// console.log(result); 
// result = 4 - undefined;
// console.log(result);  
// result = true + undefined;
// console.log(result);  
// result = null + undefined;
// console.log(result);  

/* Convert to Number Explicitly */
// // to convert numeric strings and boolean values to number, you can use Number()
// let result;
// // string to number
// result = Number('324');
// console.log(result); 
// result = Number('324e-1')  
// console.log(result); 
// // boolean to number
// result = Number(true);
// console.log(result); 
// result = Number(false);
// console.log(result); 

// //in Js, empty strings and null values return 0
// let result1;
// result = Number(null);
// console.log(result);  
// let result2 = Number(' ')
// console.log(result);  

// //If a string is an invalid number, the result will be NaN.
// let result;
// result = Number('hello');
// console.log(result); 
// result = Number(undefined);
// console.log(result); 
// result = Number(NaN);
// console.log(result); 

/* Convert to String Explicitly */
// //To convert other data types to strings, you can use either String() or toString()
// //number to string
// let result;
// result = String(324);
// console.log(result);  
// result = String(2 + 4);
// console.log(result); 
// //other data types to string
// result = String(null);
// console.log(result); 
// result = String(undefined);
// console.log(result); 
// result = String(NaN);
// console.log(result); 
// result = String(true);
// console.log(result); 
// result = String(false);
// console.log(result); 
// // using toString()
// result = (324).toString();
// console.log(result); 
// result = true.toString();
// console.log(result); 

/* Convert to Boolean Explicitly */
// //To convert other data types to a boolean, you can use Boolean().
// //In JavaScript, undefined, null, 0, NaN, '' converts to false
// let result;
// result = Boolean('');
// console.log(result); 
// result = Boolean(0);
// console.log(result); 
// result = Boolean(undefined);
// console.log(result); 
// result = Boolean(null);
// console.log(result); 
// result = Boolean(NaN);
// console.log(result); 
// result = Boolean(324);
// console.log(result); 
// result = Boolean('hello');
// console.log(result); 

/* Non-numeric String Results to NaN */
// // non-numeric string used with - , / , * results to NaN
// let result;
// result = 'hello' - 'world';
// console.log(result); 
// result = '4' - 'hello';
// console.log(result); 

/* var variables */
// var x;
// console.log(x === undefined); // true
// x = 3;
// (function () {
//   var x;
//   console.log(x); // undefined
//   x = "local value";
// })();

/* constant variables*/
// const MY_ARRAY = ["HTML", "CSS"];
// MY_ARRAY.push("JAVASCRIPT");
// console.log(MY_ARRAY); 

/*Boolean primitive*/
// if ([]) {
//     console.log("[] is truthy");
//   }
//   if ([] == false) {
//     console.log("[] == false");
//   }

/* null and undefined primitive*/
// if(null || undefined) {
//     console.log('null is true');
// } else {
//     console.log('null is false');
// }

/* Number primitive*/
// const a = 4 + 9;
// console.log(a); 

/* Number Datatype 1st example*/
// console.log(typeof 12345);
// console.log(10 + 10);
// console.log(10 - 5);
// console.log(10 / 5);
// console.log(10 * 5);
// console.log(10 % 5); //modul
// console.log(2 ** 4); //2 ** 4 calculates 2 raised to the power of 4, which is equivalent to multiplying 2 by itself 4 times.
// console.log(64 ** (1/2)); // 64 ** (1/2) is equal to the square root of 64, which is 8.
// console.log(64 ** 0.5);   // 64 ** 0.5 is equal to the square root of 64, which is 8.

/* Number Datatype 2nd example*/
// let num = 5;
// num++ //num--
// console.log(num++);
// console.log(++num);

/* Number Datatype 3rd example*/
// let num = 10; // 10.10 //output: false
// console.log(Number.isInteger(num)); 
// console.log(Number.parseInt(num));// it can change string to number 
// console.log(typeof parseInt(num));
// console.log(typeof +num); //it change typeof string to number
// console.log(typeof +num.toFixed(2)); // formats the number with two decimal places. qoldiq qismini

/* Number Datatype Math method*/
// console.log(Math.pow(3, 2));
// console.log(Math.sqrt(25));
// console.log(Math.cbrt(64)); //The cube root of 64 is 4, because 4 * 4 * 4 = 64
// console.log(Math.min(20, 45, 2));
// console.log(Math.max(20, 45, 2));
// console.log(Math.abs(-100)); // it returns the positive value of the number regardless of its original sign.
// console.log(Math.random() * 10); // it results random number between 0 and 10
// console.log(parseInt(Math.random() * 10)); //The parseInt() function in JavaScript parses a string and returns an integer. If the number generated by Math.random() * 10 is, for example, 5.23, parseInt() would convert it to 5. This effectively truncates the decimal part.
// console.log(Math.round(10.10));
// console.log(Math.floor(5.5));
// console.log(Math.ceil(10.00011));





/*Bigint/ Big integer primitive */
// Parameter in decimal format
// let bigNum = BigInt(
//     "123422222222222222222222222222222222222");
//     console.log(bigNum);
//     // Parameter in hexadecimal format
//     let bigHex = BigInt("0x1ffffffeeeeeeeeef");
//     console.log(bigHex);
//     // Parameter in binary format
//     let bigBin = BigInt(
//     "0b1010101001010101001111111111111111");
//     console.log(bigBin);
    
/* String Primitive */
// let a = 'hello';
// console.log(a);
// const name = 'My name is "John".';
// console.log(name);

/* symbol primitive */
// let id = Symbol("id");
// let person = {
//     name: "Jack",
//     // adding symbol as a key
//     [id]: 123 
// };
// console.log(person);

/*object non-primitive*/
// const person = { 
//     name: 'John',
//     age: 20
// };
// console.log(typeof person); 

/*declarations var*/
// var x = 1;
// if (x === 1) {
//   var x = 2;
//   console.log(x);
// }
// console.log(x);

/* declaration let */
// let x = 1;
// if (x === 1) {
//   let x = 2;
//   console.log(x);
// }
// console.log(x);

// let login = 'example';
// let password = 'dollar'

/* declaration const*/
// const result = /(a+)(b+)(c+)/.exec("aaabcc");
// const [, a, b, c] = result;
// console.log(a, b, c); 

/*Declaration and initialization -the initializer assigns a value to the variable. In var and let declarations, the initializer is optional. If a variable is declared without an initializer, it is assigned the value undefined*/
// let x;
// console.log(x); // logs "undefined"

/* Addition operator (+) */
// let sum = 10 + 20;
// console.log(sum);

// let x = '10',
//     y = '20';
// let result = x + y;
// console.log(result);

// let netPrice    = 9.99,
//     shippingFee = 1.99;
// let grossPrice  = netPrice + shippingFee;
// console.log(grossPrice);

/* JavaScript remainder operator examples */
// let remainder = 5 % -2;
// console.log(remainder); 
// remainder = 5 % 2;
// console.log(remainder); 
// const mod = (dividend, divisor) => ((dividend % divisor) + divisor) % divisor;
// // dividen and divisor have the same sign
// console.log('remainder:', 5 % 3); // 2
// console.log('modulo:', mod(5, 3)); // 2
// // dividen and divisor have the different signs
// console.log('remainder:', -5 % 3); // -2
// console.log('modulo:', mod(-5, 3)); // 1

/* Assignment Operators */
// let a = 10, b = 20, c = 30;
// a = b = c;
// console.log(a);

/* Unary plus (+) */
// let x = 10;
// let y = +x;
// console.log(y);

// let f = false,
//     t = true;
// console.log(+f);
// console.log(+t); 

/* Unary minus (-) */
// let x = 10;
// let y = -x;
// console.log(y); 

/* Increment / Decrement operators */
// let age = 25;
// ++age;
// console.log(age);
// let weight = 90;
// --weight;
// console.log(weight);

/*  Comparison Operators */
// let a = 10, 
//     b = 20; 
// console.log(a >= b);  
// console.log(a == 10);

// let f1 = 'apple',
//     f2 = 'Banana';
// let result = f2 < f1;
// console.log(result);

// let f1 = 'apple',
//     f2 = 'Banana';
// let result = f2.toLowerCase() < f1.toLowerCase();
// console.log(result);

/* Logical NOT operator (!) */
// let eligible = false,
//     required = true;
// console.log(!eligible);
// console.log(!required);
// console.log(!undefined); // true
// console.log(!null); // true
// console.log(!20); //false
// console.log(!0); //true
// console.log(!NaN); //true
// console.log(!{}); // false
// console.log(!''); //true
// console.log(!'OK'); //false
// console.log(!false); //true
// console.log(!true); //false

/* Logical Assignment Operators */
// let title;
// title ||= 'untitled';
// console.log(title);

// let title1 = 'JavaScript Awesome';
// title ||= 'untitled';
// console.log(title1);

/* Nullish Coalescing Operator */
// // first value is null
// const name = null ?? 'John';
// console.log(name); 
// // first value is undefined
// const age = undefined ?? 28;
// console.log(age);

/* Exponentiation Operator */
// let result = Math.pow(2,2);
// console.log(result); 
// result = Math.pow(2,3);
// console.log(result); 
// console.log('////////////////');
// let result1 = 2 ** 2;
// console.log(result1); 
// result1 = 2 ** 3;
// console.log(result1);

/* Global Scope */
// program to print a text 
// let a = "hello";
// function greet () {
//     console.log(a);
// }
// greet(); 

/*Function scope*/
// (function foo() {
//     console.log("Hello Foo");
//   })();
  
//   (function food() {
//     console.log("Hello Food");
//   })();
  
//   (() => console.log("hello world"))();
  
  /* Variable hoisting */
//   console.log(x === undefined); 
// var x = 3;
// (function () {
//   console.log(x); 
//   var x = "local value";
// })();

// /* Falsy */
// const match = { teamA: 0, teamB: 1 }
// if (match.teamA){
//   // The following won't run due to the falsy evaluation
//   console.log('Team A: ' + match.teamA);
// }

/*escape line breaks*/
// const str =
//   "this string \
// is broken \
// across multiple \
// lines.";
// console.log(str); 


/* Type conversion: implicit conversion/ explicit conversion*/
// let result;
// result = '3' + 2; 
// console.log(result)
// result = '3' + true; 
// console.log(result);
// result = '3' + undefined; 
// console.log(result);
// result = '3' + null; 
// console.log(result); 


/* Array literals */
// const coffees = ["French Roast", , "Colombian", "Kona"];
// console.log(coffees);


// if(login ==='example' && password === 'dollar'){
//     console.log('Welcome to Instagram');
// }else{
//     console.log('Login or password incorrect');
// }

// function testNum(a) {
//   let result;
//   if (a > 0) {
//     result = 'positive';
//   } else {
//     result = 'NOT positive';
//   }
//   return result;
// }
// console.log(testNum(-5));

/*---------*/
// let fruit = 'apple';
// let kg = 1;

/* if else nullish */
// let temp = 1;
// if(temp >= 1) {
//   console.log("Hot weather");
// }else {
//   console.log("Cold weather");
// }

// let temp = "hot";
// if (temp === "hot") {
//   console.log("Havo issiq, yengil kiyinib oling");
// }else if (temp === "cold") {
//   console.log(" havo sovuq, qalin kiyinib oling");
// }

// temp = 25;
// if(temp < 0) {
//   console.log("very cold");
// } else if (temp <= 25 && temp > 15) {
//   console.log("very hot");
// } else if (temp <= 15 && temp > 10) {
//   console.log("hot");
// } else if (temp <= 10 && temp > 0) {
//   console.log("cold");
// } else {
//   console.log("not found");
// }

// let check = true;
// if(!check) {
//   console.log('togri');
// }else {
//   console.log('xato');
// }

// if(fruit === 'apple'){
//     if(kg === 1){
//         console.log(1000);
//     }else if (kg === 2){
//         console.log(2000);
//     }else {
//         console.log(3000);
//     }
// }else {
//     console.log('unavailable');
// }

// let day = 5;
// switch(day){
//     case 1 : console.log('Monday'); break
//     case 2 : console.log('Tuesday'); break
//     case 3 : console.log('Wednesday'); break
//     case 4 : console.log('Thursday'); break
//     case 5 : console.log('Friday'); break
//     case 6 : console.log('Saturday'); break
//     case 7 : console.log('Sunday'); break
//     default : 'No available';
// }

// switch (undefined) {
//   case console.log(1):
//   case console.log(2):
// }

// const foo = 5;
// switch (foo) {
//   case 2:
//     console.log(2);
//     break; 
//   default:
//     console.log("default");
//   case 1:
//     console.log("1");
// }

// const foo = 1;
// let output = "Output: ";
// switch (foo) {
//   case 0:
//     output += "So ";
//   case 1:
//     output += "What ";
//     output += "Is ";
//   case 2:
//     output += "Your ";
//   case 3:
//     output += "Name";
//   case 4:
//     output += "?";
//     console.log(output);
//     break;
//   case 5:
//     output += "!";
//     console.log(output);
//     break;
//   default:
//     console.log("Please pick a number from 0 to 5!");
// }

// let data = 'cloud';
// switch (data) {
//   case 1:
//     console.log('equal');
//     break;
//   case 'rain':
//     console.log('it is raining');
//     console.log('it is raining');
//     break;
//   case 'snow':
//     console.log('it is snowing');
//     default:
//       console.log('no data');
// }



/* if else example code 1 */
// let name = 'ECMAScipt';
// if(name === 'ECMAScipt'){
//   console.log('Right');
// }else {
//   console.log('You do not know "ECMAScript"!');
// }

/* if else example code 2 */
//  let value = 1;
//   if (value > 0) {
//       console.log(1);;
//   } else if (value < 0) {
//       console.log(-1);
//   } else {
//       return 0;
//   }

/* turnery example code 3 */
// let a = 2;
// let b = 1;
// let result = (a + b < 4) ? 'Below' : 'Over';
// console.log(result); 


// let color = 'black';
// color === 'black' ? console.log('right') : console.log('wrong');
// let age = 19;
// let hasCar = true;
// let citizen = age > 16 || hasCar? 'age available, and has car ' : 'Cannot drive';
// console.log(citizen);

/*------Turnery nullish operator*/
// const name2 = undefined ?? [];
// const name1 = null ?? 'John';
// console.log(name1);

/* Nullish -> null and undefined */
// // Or || -> null undefined, 0, false, NaN
// console.log(false || 1);
// console.log(false ?? 1);
// console.log(NaN || 1);
// console.log(NaN ?? 1);
// console.log(null || 1);
// console.log(null ?? 1);
// console.log(undefined || 1);
// console.log(undefined ?? 1);




/* throw statement */
// throw "Too big";  // throw a text
// throw 500;        // throw a number
// throw false;      // throw a boolean
// throw person;     // throw an object

/* For loop 1st example*/
// for(let i = 1; i <= 5; i++ ){
//     console.log('JavaScript');
// }

/* for loop 2nd example*/
// let sum = 0;
// const n = 100
// for (let i = 1; i <= n; i++) {
//     sum += i; 
// }
// console.log('sum:', sum);

 /* for loop 3rd example*/
//  let str = 'John Special ';
//  for(let i = 0; i <= str.length - 1; i++){
//     console.log(str[i]);
//  }

// for (let step = 0; step < 5; step++) {
//   console.log("Walking east one step");
// }


/*  for loop 4th example*/
// for(let i = 1; i <= 10; i++){
//     if(i %2 === 0){
//         console.log(i, 'odd number');
//     }else {
//         console.log(i, 'even number');
//     }
// }

/* for loop 5th example */
// let str = 'John';
// let newStr = '';
// for(let i = 0; i < 10; i++){
//     newStr += str
// }
// console.log(newStr);

/* for loop 6th exmaple */
// let i = 1;
// for(i; i <= 10; i = i + 1){
// console.log('Hello World');
// }
// for(; i < 12; i++) {
//   console.log(i);
// }

/* for loop 7th exmaple */
// var sum = 0;
// for(i = 1; i < 12; i++) {
//   console.log((sum += i));
//   if(sum === 10) break;
// console.log(i);
// i += i;
// }

/* for loop 8th example (odd and even) */
// var sum = 0;
// for(i = 1; i < 12; i++) {
//   if( i % 2 === 0) console.log(`even number ${i}`);
//   else console.log(`odd number ${i}`);
// }

/* for loop 9th example (from back side) */
// var sum = 0;
// for(i = 12; i >= 1; i--) {
//   if( i % 2 === 0) console.log(`even number ${i}`);
//   else console.log(`odd number ${i}`);
// }


/* while loop (varibale outside)*/
// let i = 0;                  //10-from opposite side
// while(i <= 10){             // while(i){
//     console.log(i);         //
//     i++                     //i--
// }

// let n = 0;
// let x = 0;
// while (n < 3) {
//   n++;
//   x += n;
// }
// console.log(n);


/* do while loop(firstly code run and condition false/true) */
// let i = 0;
// do {
//   i += 1;
//   console.log(i);
// } while (i < 5);

/* labeled statement */
// let str = '';
// loop1: for (let i = 0; i < 5; i++) {
//   if (i === 1) {
//     continue loop1;
//   }
//   str = str + i;
// }
// console.log(str);

/* labeled break with for loops*/
// let i, j;
// loop1: for (i = 0; i < 3; i++) {
//   loop2: for (j = 0; j < 3; j++) {
//     if (i === 1 && j === 1) {
//       break loop1;
//     }
//     console.log(`i = ${i}, j = ${j}`);
//   }
// }

/* labeled continue statement*/
// for (let i = 1; i <= 5; i++) { 
//   if (i == 3) {
//       continue;
//   }

//   console.log(i);
// }

/* nested loop*/
// for(let i = 0; i <= 2; i++){
//     console.log('--outside loop');
//     for(let j = 0; j <= 3; j++){
//         console.log('-------inner loop');
//     }
// }


/* let */
// let x = 1;
// if (x === 1) {
//   let x = 2;
//   console.log(x);
// }
// console.log(x);

/* return statement */ 
// function getRectArea(width, height) {
//   if (width > 0 && height > 0) {
//     return width * height;
//   }
//   return 0;
// }
// console.log(getRectArea(3, 4));
// console.log(getRectArea(-3, 4));

/* Function */
// function myFunc(theObject) {
//   theObject.make = "Toyota";
// }
// const mycar = {
//   make: "Honda",
//   model: "Accord",
//   year: 1998,
// };
// console.log(mycar.make); 
// myFunc(mycar);
// console.log(mycar.make); 

/* Function */
// function say(message) {
//   console.log(message);
// }
// let result = say('Hello');
// console.log('Result:', result);

/* Functions properties */
// // each function has two important properties(length and prototype)
// function add(x, y) {
//   return x + y;
// }
// console.log(add.length); 
// console.log(add.prototype); 

/* new.target return a reference */
// function add(x, y) {
//   console.log(new.target);
//   return x + y;
// }
// let result = add(10, 20);
// let obj = new add(10, 20);


/* Functon =>declaration*/ 
// function test(){
//   console.log('Hi');
//   console.log(10 + 10);
// } 
// // invoking calling a function
// test();

/* Function example 1st code */
// function getAvr(){
//   console.log('John Special');
//   console.log('John Special');
//   console.log('John Special');
//   console.log('John Special');
//   console.log('John Special');
//   console.log('John Special');
//   console.log('John Special');
//   console.log('============');
// }

/* Function example 2nd code */
// let id = 1;
// console.log(id);
// function getAvr(){
//   console.log('John, Welcome to new life');
// }
// getAvr();
// getAvr();
// getAvr();



/* Functon =>expression or anonymous*/

// let test = function(){    //test is called expression function
//   console.log(10 + 10);
// }
// test();

// //a function can be anonymous; it does not have to have a name. For example, 
// //the function square could have been defined as:
// const square = function (number) {
//   return number * number;
// };
// console.log(square(4));


/* Function => arrow */
// let test = () => {
//   console.log(10 + 10);
// }
// test();

/* Arrow function example code */
// let name = 'special';
// const test = () => {
//   let name = 'John'
//   console.log(name);
// };
// console.log(name);
// test();

// const getAvr = function(name) {
//   console.log(`${name}, Welcome to new life`);
// }
// getAvr('John Special');
// getAvr('John Special');
// getAvr('John Special');
// getAvr('John Special');

/* function => parametr/argument*/
// function person(name){ //name is parametr
//   return 'John' + ' ' + name
// }
// console.log(person('Special')); //'special' is argument

/* function parameter, arrow exmaple code */
// const getAvr = function(name, surname, age) {
//   console.log(`Name:  ${surname}`);
//   console.log(`Surname:  ${surname}`);
//   console.log(`Age:  ${age}`);
//   console.log(`====================`);
//   }
//   getAvr('John Special', 'Ravshanov',25);
//   getAvr('John Special', 'Ravshanov',25);
//   getAvr('John Special', 'Ravshanov',25);
//   getAvr('John Special', 'Ravshanov',25);
  
/* Function default parameter */
// const telegram = (name, surname) => {
//   if(surname) console.log((name, surname));
//   else console.log(name);
// }
// telegram('John');

// function counter() {
//   for (let count = 1; ; count++) {
//     console.log(`${count}A`); 
//     if (count === 5) {
//       return;
//     }
//     console.log(`${count}B`); 
//   }
//   console.log(`${count}C`); 
// }
// counter();


/* Calling Functions */
// //function that adds two numbers 
// function sum(a, b) {
//   return a + b;
// }
// // calling sum() function  
// var result = sum.call(this, 5, 10);
// console.log(result);

/* Function hoisting */
// console.log(square(5));
// function square(n) {
//   return n * n;
// }

/* Name conflicts  */
// function outside() {
//   const x = 5;
//   function inside(x) {
//     return x * 2;
//   }
//   return inside;
// }
// console.log(outside()(10)); 
// // The name conflict happens at the statement return x * 2 and is between inside's parameter x and outside's variable x. 
// // The scope chain here is {inside, outside, global object}. 
// //Therefore, inside's x takes precedences over outside's x, and 20 (inside's x) is returned instead of 10 (outside's x).

/*  Closures   */
// // Closures are one of the most powerful features of JavaScript.
// // JavaScript allows for the nesting of functions and grants the inner function full access to all the variables and functions defined 
// //inside the outer function (and all other variables and functions that the outer function has access to).
// // The outer function defines a variable called "name"
// const pet = function (name) {
//   const getName = function () {
//     // The inner function has access to the "name" variable of the outer function
//     return name;
//   };
//   return getName; 
// };
// const myPet = pet("Vivie");
// console.log(myPet()); 

/*Using the arguments object */
// // The arguments of a function are maintained in an array-like object. 
// // Within a function, you can address the arguments passed to it 
// function myConcat(separator) {
//   let result = ""; // initialize list
//   // iterate through arguments
//   for (let i = 1; i < arguments.length; i++) {
//     result += arguments[i] + separator;
//   }
//   return result;
// }
// console.log(myConcat(", ", "red", "orange", "blue"));
// console.log(myConcat("; ", "elephant", "giraffe", "lion", "cheetah"));
// console.log(myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley"));

/* Function parameters (default parameters)*/
// // Default parameters  parameters of functions default to undefined. However, 
// //in some situations it might be useful to set a different default value. This is exactly what default parameters do.
// function multiply(a, b) {
//   b = typeof b !== "undefined" ? b : 1;
//   return a * b;
// }
// console.log(multiply(5)); 

/* Rest parameters */
//The rest parameter syntax allows us to represent an indefinite number of arguments as an array
// function multiply(multiplier, ...theArgs) {
//   return theArgs.map((x) => multiplier * x);
// }

// const arr = multiply(2, 1, 2, 3);
// console.log(arr); 

/* Numbers */
// // program to convert date to number
// // create date
// const d1 = new Date();
// console.log(d1);
// // converting to number
// const result = d1.getTime();
// console.log(result);

/* Text formatting string */
// const firstString = "2 + 2"; // Creates a string literal value
// const secondString = new String("2 + 2"); // Creates a String object
// eval(firstString); // Returns the number 4
// eval(secondString); // Returns a String object containing "2 + 2"
// console.log(firstString);
// console.log(secondString);

/* String examples */
// console.log(10 % 5);
// console.log(2 ** 4);
// console.log(25 ** (1/2));
// console.log(25 ** 0.5);

// let str = 'W1eBb4rBain7';
// let upper = str.match(/[A-Z]/g);
// let toString = upper.join("");
// console.log(toString);


/* Multi-line template literals */
// // Any new line characters inserted in the source are part of the template literal. 
// // Using normal strings, you would have to use the following syntax in order to get multi-line strings:
// console.log(
//   "string text line 1\n\
// string text line 2",
// );
// // "string text line 1
// // string text line 2"

/* Embedded expressions */
// const five = 5;
// const ten = 10;
// console.log(
//   "Fifteen is " + (five + ten) + " and not " + (2 * five + ten) + ".",
// );

/* String  1st example code*/
// //index
// let str = 'hello';
// console.log(str[0]);
// console.log(str[1]);
// console.log(str[2]);
// console.log(str[3]);
// console.log(str[4]);
// //length
// console.log(str[str.length - 1]);

/* String  2nd example code*/
// let str = `hello
// world
// `;
// console.log(str);
// console.log(str.length);
// console.log(str[0]);


/* String  3rd example code*/
// let name = 'John Special';
// let age = '25 years old';
// let status = 'Front-End Developer';
// let str = `I am: ${name}
// ${age}
// ${status}`;
// console.log(str);

/* String  4th example code*/
// let str = 'john special';
// console.log(str);
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.trim().length);
// console.log(str.startsWith('j'));
// console.log(str.endsWith('W'));
// console.log(str.padStart(15, 'mr'));

/* String  5th example code */
// let str = 'Hello World';
// console.log(str.replace('Hello World', 'Welcome'));
// console.log((str + ' ').repeat(5));
// console.log(str.concat((str + ' '), 'I am John'));
// console.log(str.includes('World'));
// console.log(str.indexOf('W'));

/* String  6th example code */
// let str = 'JohnSpecial';
// console.log(str.charAt(3));
// console.log(str.substring(4, 11));
// console.log(str.slice(0, 4));
// console.log(str.substr(4, 11));

///////////////////////////////////
/* Strign 7th example code */
// let str = 'John';
// console.log(str.startsWith('J'));
// console.log(str.endsWith('W'));
/////////////////////////////////
/* Strign 8th example code */
// let str = 'John';
// let str2 = 'Special';
// console.log(str.concat(str2, 'developer'));


/* string 9th example code */
// const strPrim = "foo"; 
// const strPrim2 = String(1); 
// const strPrim3 = String(true); 
// const strObj = new String(strPrim); 
// console.log(typeof strPrim); 
// console.log(typeof strPrim2); 
// console.log(typeof strPrim3); 
// console.log(typeof strObj); 

/* string 10th example code */
// const s1 = "2 + 2"; 
// const s2 = new String("2 + 2"); 
// console.log(eval(s1)); 
// console.log(eval(s2)); 

/* string 11th example code */
// const sentence = 'The quick brown fox jumps over the lazy dog.';
// const word = 'fox';
// console.log(
//   `The word "${word}" ${
//     sentence.includes(word) ? 'is' : 'is not'
//   } in the sentence`,
// );

/* string 12th example code */
// const str = "To be, or not to be, that is the question.";
// console.log(str.includes("To be")); 
// console.log(str.includes("question")); 
// console.log(str.includes("nonexistent"));
// console.log(str.includes("To be", 1)); 
// console.log(str.includes("TO BE")); 
// console.log(str.includes("")); 

/*string 13th example code */
// const paragraph = "I think Ruth's dog is cuter than your dog!";
// const regex = /[^\w\s']/g;
// console.log(paragraph.search(regex));
// console.log(paragraph[paragraph.search(regex)]);

/* string 14th example code */
// const str = "hey JudE";
// const re = /[A-Z]/;
// const reDot = /[.]/;
// console.log(str.search(re)); 
// console.log(str.search(reDot)); 

/* string 15th example code */
// const stringObj = new String('foo');
// console.log(stringObj);
// console.log(stringObj.toString());

// const x = new String("Hello world");
// console.log(x.toString());

/* string to seperate upper cases */
// let str = 'JohnSpecial';
// let newStr = str.match(/[A-Z]/g);
// console.log(newStr);

// let str = 'IT IT IT IT';
// console.log(str.replace(/IT/g, 'WEB'));






/* object 1st example code*/
// let car = {
//   name: 'Mercedes-Benz',
//   color: 'Black', 
//   engine: 1.6,
// }
// console.log(car.name);
// console.log(car.color);
// console.log(car.engine);

/* Object non primitive */
// let car1 = {
//   name: 'Volvo'
// }
// let car2 = {
//   name: 'Volvo'
// }
/* primitive */
// let car1 = 'Volvo';
// let car2 = 'Volvo';
// console.log(car1 == car2);
// console.log(car1 === car2);

/* Object 3rd example code */
// let car = {
//   name: 'Kia',
//   color: 'black',
//   price: 20000
// }

// car.color = 'white'; //for updating the color
// car.engine = 1.6;
// delete car.engine // for deleting the value and key
// let key = 'price';
// console.log(car.name);
// console.log(car['color']);
// console.log(car[key]);
// console.log(car.engine);

/* Object methods */
// let car = {
//     name: 'Kia',
//     color: 'black',
//     price: 20000
//   }
//   let arr = [ [ 'name', 'Kia' ], [ 'color', 'black' ], [ 'price', 20000 ] ]

//   console.log(Object.keys(car));
//   console.log(Object.values(car));
//   console.log(Object.entries(car));
//   console.log(Object.fromEntries(arr));
//   console.log(Object.freeze(car));// for frezing the code(adding and deleting)
//   console.log(Object.seal(car));//can update but can't delete and update

/* Object methods this keyword */
// console.log(this);   //global window

// const obj = {
//     name: 'NBA',
//     title: 'Academy',
    
//     test:function(input){
//       console.log(this.name + ' ' + this.title);
//     }
//   }
//   obj.test()

// const obj = {
//   name: 'NBA',
//   title: 'Academy',
  
//   test:function(input){
//     console.log('Hello World', input);
//   }
// }

//   console.log(obj.name);
//   obj.test('John')

/* Object clone example 1st code */
// const obj1 = {
//   name:'John',
//   title: 'Special'
// }
// let clone = Object.assign({}, obj1)
// clone.status = 'Student';
// console.log(clone);
// console.log(obj1);

/* Object clone example 2nd code */
// const obj1 = {
//   name:'John',
//   status: {
//     title: 'Special',
//     age: {
//       yosh: 25
//     }
//   }
  
// }
// let clone = Object.assign({}, obj1)
// console.log(clone);

/* Object clone (structured) example 3rd code */
// const obj1 = {
//   name:'John',
//   status: {
//     title: 'Special',
//     age: {
//       yosh: 25
//     }
//   }
  
// }
// let clone = structuredClone(obj1);
// console.log(clone);

/* Object spread operator example code*/
// const obj1 = {
//   name: 'John',
//   title: 'Speciaal'
// }
// let clone = {...obj1, name: 'Jakhon'};
// console.log(clone);

/* Object destructure example code */
// const obj = {
//   name: 'John',
//   title: 'special',
//   age: {
//     yosh: 20,
//     status: {
//       info: 'Hey'
//     }
//   }
// }
// const {name, title, price, age:{status: {info}}} = obj;

// console.log(name);
// console.log(obj);

/* Object the dot notation(.) */
// let person = {
//   firstName: 'John',
//   lastName: 'Doe'
// };
// console.log(person.firstName);
// console.log(person.lastName);

/* Modifying the value of a property */
// let person = {
//   firstName: 'John',
//   lastName: 'Doe'
// };
// person.firstName = 'Jane';
// console.log(person);

/* Checking if a property exists */
// let employee = {
//   firstName: 'Peter',
//   lastName: 'Doe',
//   employeeId: 1
// };
// console.log('ssn' in employee);
// console.log('employeeId' in employee);

/* Deleting a property of an object */
// const Employee = {
//   firstname: 'Maria',
//   lastname: 'Sanchez',
// };
// console.log(Employee.firstname);
// delete Employee.firstname;
// console.log(Employee.firstname);

/* Adding a new property to an object */
// const obj = { name: 'Sling Academy', address: 'Hidden Forest' };
// obj.newProperty = 'New Property';
// console.log(obj);

/* object undefined */
// const obj = { prop1: 'value1' };
// if (typeof obj.prop2 === 'undefined') {
//     console.log('prop2 is undefined');
// };

////////////////////////////////////
// for (let j = 1; j <= 10; j++) {
//     let i = 1;

//     while (i <= 10) {
//         console.log(j + ' * ' + i + ' = ' + (j * i));
//         i++;
//     }
//     console.log('//////////////////');
// }


/* Array */
// let athletes = new Array(3); 
// let scores = new Array(1, 2, 3); 
// let signs = new Array('Red');
// console.log(athletes); 
// console.log(scores);
// console.log(signs);

/* JavaScript array elements */
// let mountains = ['Everest', 'Fuji', 'Nanga Parbat'];
// console.log(mountains[0]); 
// console.log(mountains[1]); 
// console.log(mountains[2]); 

/* Getting the array size */
// let mountains = ['Everest', 'Fuji', 'Nanga Parbat'];
// console.log(mountains.length); 
// let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
// seas.push('Red Sea');
// console.log(seas); 

/* Array unshift() adding method */
// let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
// seas.unshift('Red Sea');
// console.log(seas);

/* Array pop() removinf array element */
// let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
// const lastElement = seas.pop();
// console.log(lastElement); 

// let seas1 = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
// const firstElement = seas1.shift();
// console.log(firstElement);

/* Array indexOf() method */
// let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
// let index = seas.indexOf('North Sea');
// console.log(index); 

/*  check if a value Array.isArray() method */
// let numbers = [1, 2, 3, 4];
// // checking whether numbers is an array or not
// console.log(Array.isArray(numbers));
// let text = "JavaScript";
// // checking whether text is an array or not
// console.log(Array.isArray(text));

/* Array basics */
// let arr = [
//   {name: 'Mercedes', color: 'Black'},
//   {name: 'Mercedes', color: 'Black'},
//   {name: 'Mercedes', color: 'Black'},
//   {name: 'Mercedes', color: 'Black'},
//   {name: 'Mercedes', color: 'Black'},
//   {name: 'Mercedes', color: 'Black'},
// ] 
// console.log(arr);

/* Array */
// let arr = [100, 'hundred', null, undefined, {name: 'John'}, ['array'], function(){}];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);

/* Array + Object  */
// let arr = [100, 'hundred'];
// arr[0] = 'Hello';
// arr[10] = 'WBA';
// console.log(arr);

/* Array.isArray */
// let numbers = [1, 2, 3, 4];
// // checking whether numbers is an array or not
// console.log(Array.isArray(numbers));
// let text = "JavaScript";
// // checking whether text is an array or not
// console.log(Array.isArray(text));

/* Array.join and concat */
// let arr = ['a', 'b', 'c'];
// let arr2 = ['d', 'e', 'f']
// console.log(arr.join('-'));
// console.log(arr.concat(arr2, {name: 'John'}, 100));

/* Array.slice and splice */
// let arr = ['John', 'Special', 'Jack'];
// arr.slice(0, 2);
// arr.splice(0, 2);
// console.log(arr);
// console.log(arr.slice(0, 2));
// console.log(arr.splice(0, 2));

/* Array split and reverse */
// let arr = ['John', 'Special', 'Jack'];
// let str = 'WEBBRAIN';
// let toArray = str.split('')
// let toReverse = toArray.reverse();
// let toJoin = toReverse.join('')
// console.log(str.split(''));
// console.log(arr.reverse());
// console.log(toReverse);
// console.log(str.split('').reverse().join(''));

/* Array (number => string)*/
// let num = 123456789;
// console.log(typeof num);
// console.log(num.toString().split('').reverse().join(''));
// console.log(num.toString().split('').reverse());
// console.log(num.toString().split(''));

/* Array push and pop */
// let arr = ['John', 'Special', 'Jack'];
// arr.push('Jakhon', 'Example');
// arr.pop();
// arr.unshift('Example', 'special');
// arr.shift()
// console.log(arr);

/* Array sort numbers */
// let arr = [2, 4, 1, 5, 3, 2, 6, 12, 100];
// console.log(arr.sort( (a, b) => console.log(a, b)));
// console.log(arr.sort( (a, b) => a - b));
// console.log(arr.sort( (a, b) => b - a));

/* Array sort string */
// let arr = ['a', 'c', 'b', 'A', 'B'];
// console.log(arr.sort( (birinchi, ikkinchi) => birinchi.localeCompare(ikkinchi)));

// var animals = [
//   'cat', 'dog', 'elephant', 'bee', 'ant'
// ];
// animals.sort();
// console.log(animals);

/* Array map */
// let arr = ['John', 'Special', 'Jack', 'Jakhon'];

// arr.map((value, index, array)=> {
//   console.log(value);
//   console.log(index);
//   console.log(array);
// })

// let arr = ['John', 'Special', 'Jack', 'Jakhon'];
// let newArr = arr.map((value, index, array)=> {
//   return 'mr ' + value 
// })
// console.log(newArr);

// let arr = ['John', 'Special', 'Jack', 'Jakhon'];
// let newArr = arr.forEach((value, index, array)=> {
//   console.log(value);
//   console.log(index);
//   console.log(array);
// })
// console.log(newArr);

/* Array filter */
// let arr = [2, 4, 1, 5, 3, 2, 6, 12, 100];
// let filtered1 =  arr.filter((value) => value > 10);
// let filtered2 =  arr.filter((value, index) => value < 10);
// console.log(filtered1);
// console.log(filtered2);


// let arr = [2, 4, 1, 5, 3, 2, 6, 12, 100];
// let newArr = [];
// arr.map((value) => {
//   if(value > 10){
//     newArr.push(value)
//   }
// })
// console.log(newArr);

// let arr = [2, 4, 1, 5, 3, 2, 6, 12, 100];
// let filtered1 =  arr.filter((value, index) => index === 2);
// let filtered2 =  arr.filter((value, index) => index !== 2);
// console.log(filtered1);
// console.log(filtered2);

/* Array find */
// let arr = ['John', 'Special', 'Jack', 'Jakhon'];
// let filtered1 =  arr.filter((value, index) => value === 'John');
// let filtered2 =  arr.filter((value, index) => value !== 'John');
// console.log(filtered1);
// console.log(filtered2);

/* Array flat */
// let arr = [1,[2], [2, 4, [2], [1, 3]]];
// console.log(arr.flat(Infinity));

/* Array Every and some */
// let arr = [2, 4, 1, 5, 3, 2, 6, 12, 100];
// let checking1 = arr.every((n) => n < 50);
// let checking2 = arr.every((n) => n <= 100);
// let checking = arr.some((n) => n > 3);
// console.log(checking1);
// console.log(checking2);
// console.log(checking);

/* Array fill method */
// let arr = ['John', 'Special', 'Jack', 'Jakhon'];
// let filling = arr.fill('Ravshanov');
// console.log(filling);

// var fruits = ['Apple', 'Banana', 'Grape'];
// var filling2 = fruits.fill('Cherry');
// console.log(filling2);

/* Array reduce */
// let str = '55555';
// let num = 55555;
// let toArray = str.split('');
// let sum = toArray.reduce((initial, total) => initial + +total, 0);
// console.log(sum);
// console.log(str.split('').reduce((initial, total) => initial + +total, 0));
// console.log(num.toString().split('').reduce((initial, total) => initial + +total, 0));

/* array reduce method  and function to join*/
// const message = ["JavaScript ", "is ", "fun."];

// function to join each string elements
// function joinStrings(accumulator, currentValue) {
//   return accumulator + currentValue;
// }
// // reduce join each element of the string
// let joinedString = message.reduce(joinStrings);
// console.log(joinedString);


//////////////////////////////////////////////////
/* object primitive vs non-primitive*/
// let obj1 = {title: 'student'};
// let obj2 = {title: 'student'};
// console.log(obj1 == obj2);
// console.log(obj1 === obj2);
// let str1 = 'Wba';
// let str2 = 'Wba';
// console.log(str1 == str2);
// console.log(str1 === str2);

/* copy by refenrence */
// let a = {name: 'John'};
// let b = a;
// a.status = 'Student';
// console.log(a);
// console.log(b);





// const rectangle = { 
// 	length: 25, 
// 	width: 20, 
// 	area: function () { 
// 		return this.length * this.width 
// 	} 
// } 
// const square = new Object(); 
// square.side = 10; 
// square.area = function () { 
// 	return this.side * this.side 
// }; 
// square.side = 20; 
// console.log(rectangle, "area: " + rectangle.area()); 
// console.log(square, "area: " + square.area());


// let arr = [2, 8, 9, 1, 3, 10, 10, 111];
// // console.log(arr.sort()); // for only 0~9
//  console.log(arr.sort( (a, b) =>  {
//   return a - b
// }));//


// let str = 'WBA';
// console.log(str.split('').reverse().join(''));

// var num = 21234567;
// console.log(+num.toString().split('').sort().join(''));


// let arr = ['John', 'Special', 'Ravshanov'];
// arr.map((value, index, array) =>{
//   console.log(value);
//   console.log(index);
//   console.log(array);
// })
// arr.forEach((value, index, array) =>{
//   console.log(value);
//   console.log(index);
//   console.log(array);
// })


// // Pass a function to map
// const map1 = array1.map((x) => x * 2);

// console.log(map1);

// const kvArray = [
//   { key: 1, value: 10 },
//   { key: 2, value: 20 },
//   { key: 3, value: 30 },
// ];
// const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));
// console.log(reformattedArray); 

////////////////////////////////////////////
// let arr = ['nok', 'anor', 'olma'];
// let find_Index = arr.findIndex((value) => value === 'anor');
// console.log(find_Index);

/* array reduce*/
// let num = '5645'
// let arr = num.split("");
// let result = arr.reduce((initial, total) => initial + +total, 0);
// console.log(result);

// let arr = [10, 20, 30, 40];
// let result = arr.reduce((a, b) => a + b, 0)
// console.log(result);

/* array flat */
// let arr = [5, [5, [5]], [5]]
// let flatted = arr.flat(Infinity).reduce((a, b) => a + b, 0);
// console.log(flatted);


/* array spread */
// let arr = [20, 10, 5];
// let copy = [...arr, 100].reduce((a, b) => a + b, 0);
// console.log(copy);


/* array destructure */
// let arr = [100, 200, 200, 400];
// let [bir, ikki, uch, turt] = arr;
// console.log(turt);



// let cars = [
//     { id: 1, year: 1998, engine: 1, name: 'Tico'},
//     { id: 2, year: 2005, engine: 1.2, name: 'Matiz'},
//     { id: 3, year: 2010, engine: 1.6, name: 'Gentra'},
//     { id: 4, year: 2010, engine: 1.5, name: 'Cobalt'},
//     { id: 5, year: 2012, engine: 2, name: 'Malibu'},
//     { id: 6, year: 2000, engine: 1.2, name: 'Damas'},
//     { id: 7, year: 2018, engine: 2.4, name: 'Tracker'}
// ];
// cars.map(({id, year, engine, name}) => {
//   console.log(name);
//   console.log(id);
//   console.log(year);
//   console.log(engine);
// });

//////////////////////////////////////////////////////////////
/* CRUD read */
// let phones = [
//   {id: 1, year: 2015, price: 200, name: 'Iphone 6' },
//   {id: 2, year: 2015, price: 400, name: 'Iphone 7' },
//   {id: 3, year: 2015, price: 600, name: 'Iphone 8' },
//   {id: 4, year: 2015, price: 800, name: 'Iphone X' },
//   {id: 5, year: 2015, price: 1000, name: 'Iphone 11' },
//   {id: 6, year: 2015, price: 1200, name: 'Iphone 12' },
//   {id: 7, year: 2015, price: 1400, name: 'Iphone 13' },
// ]
// phones.map((value) => {
//   console.log(value);
// } )


/* CRUD delete */
// let phones = [
//   {id: 1, year: 2015, price: 200, name: 'Iphone 6' },
//   {id: 2, year: 2016, price: 400, name: 'Iphone 7' },
//   {id: 3, year: 2017, price: 600, name: 'Iphone 8' },
//   {id: 4, year: 2018, price: 800, name: 'Iphone X' },
//   {id: 5, year: 2019, price: 1000, name: 'Iphone 11' },
//   {id: 6, year: 2020, price: 1200, name: 'Iphone 12' },
//   {id: 7, year: 2021, price: 1400, name: 'Iphone 13' },
// ]
// const onDelete = (ids) => {
//   return phones.filter((value) => value.id !== ids)
//   // return phones.filter(function(value){
//   //   return value.id !== ids
//   // })
// }

// console.log(onDelete(1));

/* CRUD create */
// let phones = [
//   {id: 1, year: 2015, price: 200, name: 'Iphone 6' },
//   {id: 2, year: 2016, price: 400, name: 'Iphone 7' },
//   {id: 3, year: 2017, price: 600, name: 'Iphone 8' },
//   {id: 4, year: 2018, price: 800, name: 'Iphone X' },
//   {id: 5, year: 2019, price: 1000, name: 'Iphone 11' },
//   {id: 6, year: 2020, price: 1200, name: 'Iphone 12' },
//   {id: 7, year: 2021, price: 1400, name: 'Iphone 13' },
// ]
// const onCreate = (phone) => {
//     phones.push(phone);
// }
// onCreate({year: 2022, price: 1300, name: 'Iphone 14'});
// console.log(phones);

// let phones = [
//   {id: 1, year: 2015, price: 200, name: 'Iphone 6' },
//   {id: 2, year: 2016, price: 400, name: 'Iphone 7' },
//   {id: 3, year: 2017, price: 600, name: 'Iphone 8' },
//   {id: 4, year: 2018, price: 800, name: 'Iphone X' },
//   {id: 5, year: 2019, price: 1000, name: 'Iphone 11' },
//   {id: 6, year: 2020, price: 1200, name: 'Iphone 12' },
//   {id: 7, year: 2021, price: 1400, name: 'Iphone 13' },
// ]
// const onCreate = (phone) => {
//     phones = [...phones, {id: phones.length + 1, ...phone }]
// }
// onCreate({year: 2022, price: 1300, name: 'Iphone 14'});
// console.log(phones);

// const rectangle = { 
//   length: 25, 
//   width: 20, 
//   area: function () { 
//       return this.length * this.width 
//   } 
// } 
// const square = new Object(); 
// square.side = 10; 
// square.area = function () { 
//   return this.side * this.side 
// }; 
// square.side = 20; 
// console.log(rectangle, "area: " + rectangle.area()); 
// console.log(square, "area: " + square.area());

// const array1 = [1, 4, 9, 16];

// const set = new Set([1, 2]);
// console.log(set.values());
// set.add(3);
// console.log(set.values());
// set.add(1);
// console.log(set.values());

/* Call() Method */
// let user1 = {
//   id: 1,
//   name: 'John',
//   status: 'Mentor',
//   sayHi() {
//     console.log(this.status);
//   }
// }
// let user2 = {
//   status: 'Mentor'
// }

// user1.sayHi.call(user2)

/* apply() */
// let user1 = {
//   id: 1,
//   name: 'John',
//   status: 'Mentor',
//   sayHi(age, hobby) {
//     console.log(this.status, age, hobby);
//   }
// }
// let user2 = {
//   status: 'Mentor'
// }

// user1.sayHi.apply(user2, [25, 'soccer']);

/* Bind() method */
// let user1 = {
//   id: 1,
//   name: 'John',
//   status: 'Mentor',
//   sayHi(age, hobby) {
//     console.log(this.status, age, hobby);
//   }
// }
// let user2 = {
//   status: 'Mentor'
// }

// user1.sayHi.bind(user2,25, 'soccer')();


// function countDown(number) {
//   console.log(number);
//   const newNumber = number - 1;
//   if (newNumber > 0) {
//       countDown(newNumber);
//   }
// }

// countDown(4);


/////////// recursive function(recursion) ///////////
// function countdown(number) {
//   console.log(number);
//   let newNumber = number - 1;
//   if(newNumber > 0) {
//     countdown(newNumber)
//   }
// }
// countdown(10);

////////// new set()//////////////////
// let arr = [1, 2, 3, 4, 5, 5, 6, 'a', 'a'];
// let set = new Set([1, 2, 3, 4, 5, 5, 6, 'a', 'a']);
// let uniqueValue = [...set]

// console.log(arr);
// console.log(uniqueValue);

// const set1 = new Set([1, 2, 3]);
// console.log(set1.values()); 

/////////// Prototype //////////////////////
// const user = {
//   name: 'John',
//   lastName: 'Doe',
//   age: 30,
//   greet() {
//     console.log('Hi');
//   }
// }
// Array.prototype.getName = function (name) {
//   console.log(`Hi ${name}`);
// }
// console.log(user);

//////  Expression syntax /////////////////////
// (function () {
//   console.log('Salom xammaga');
// })();

////////// Declaration ////////////////////////
// (function myIIFE() {
//   console.log('Salom xammaga');
 
// })();

///////////Pure function ///////////////////////////////
// function sayHi(name) {
//   return `Salom ${name}`
// }
// console.log(sayHi('Jakhongir'));


///////////imPure function ///////////////////////////////
// let greeting = 'Salom';
// greeting = 'Hello';

// function sayHi(name) {
//   return `${greeting} ${name}`
// }
// console.log(sayHi('Jakhongir'));


///////// new Date() ////////////////////
// let d = new Date();
// console.log(d.getDay());

//////// non-Curry function ///////////////////////////
// const add = (a, b, c) => {
//   return a + b + c
// }
// console.log(add(5, 5, 5));

///////// Curry function ////////////////////////////
// const add = (a) => {
//   return (b) => {
//     return (c) => {
//       return a + b + c
//     }
//   }
// }
// console.log(add(5)(5)(5));

// function sendRequest(sayHi) {
//   return function (name) {
//     return function (message) {
//       return `${sayHi} ${name} ${message}`
//     }
//   }
// }
// console.log(sendRequest('salom')('Jahongir')('iltimos telegram gruppaga qoshib qoying'));


//////  Higher ordered function /////////////////////////////////
// const number = [ 1, 2, 3, 4, 5];
// number.forEach((n) => {
//   console.log(n + 1);
// })

//////// Call back function ///////////////////////////////////////////
// function greet(name) {
//   console.log('Hi' + ' ' + name);
// }
// greet('Peter');

//////// OOP class///////////////////////////////////////////////////
// class Car {
//  constructor(name, color, price) {
//    this.name = name;
//    this.color = color;
//    this.price = price;
//  }
//  showinfo() {
//   console.log(`Bu ${this.color} ${this.name} ning narxi $${this.price}`);
//  }
// }
// let car = new Car('Benz', 'Black', '10000');
// car.showinfo();


// function displayLikes(likes) {
//   switch (likes.length) {
//     case 0:
//       return "no one likes this";
//     case 1:
//       return `${likes[0]} likes this`;
//     case 2:
//       return `${likes[0]} and ${likes[1]} like this`;
//     case 3:
//       return `${likes[0]}, ${likes[1]} and ${likes[2]} like this`;
//     default:
//       return `${likes[0]}, ${likes[1]} and ${likes.length - 2} others like this`;
//   }
// }

// // Test cases
// console.log(displayLikes([])); // Output: "no one likes this"
// console.log(displayLikes(["Peter"])); // Output: "Peter likes this"
// console.log(displayLikes(["Peter", "John"])); // Output: "Peter and John like this"
// console.log(displayLikes(["Peter", "John", "Alice"])); // Output: "Peter, John and Alice like this"
// console.log(displayLikes(["Peter", "John", "Alice", "Bob"])); // Output: "Peter, John and 2 others like this"


//////// Error handling /////////////////////////////////////////////
// const add = (a, b) => {
//   return a + b
// }

// try {
//   let result = add(10,20);
//   console.log(result);
// }catch (error){

// }

//////////// Asynchronous Javascript ////////////////////////////
// function A() {
//   console.log('A');
// }
// function B() {
//   console.log('B');
// }
// A();
// B();

/////////// Browser web APIS //////////////////
// console.log('Example1');

// setTimeout(() => {
//   console.log('Example2');
// }, 2000)
// console.log('Example3');

// console.log("Hi!");
// setTimeout(function timeout() {
//     console.log("Click the button!");
// }, 5000);
// console.log("Welcome to loupe.");


/////////////  //////////////////////////////////////////////////
// let str = 'WBaAcademy';
// for (let i = 0; i < str.length; i++){
// }

//////////////////////////////////////////////////////////////////
// function IncrementNumber(num, iteratorMax){
//   for(let i = 0 ; i < iteratorMax ; ++i){
//       num += i;
//       console.log(`i: ${i}\tnumber: ${num}`);
//   }
//   return num;
// }

// console.log(`Result: ${IncrementNumber(0, 10)}`);


////////////////////////////////////////////////////////////////
// function test(){
//   const printer = {
//       on : true,
//       mode : "black and white",
//       print : printMe(" Name"),
//       printAgain : function () {
//           alert("Hi there!");
//       }
//   }
// }
// console.log(function);

////////////////////////////////////////////////////////
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);