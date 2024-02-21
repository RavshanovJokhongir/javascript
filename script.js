
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

// let str = 'John';
// let newStr = '';
// for(let i = 0; i < 10; i++){
//     newStr += str
// }
// console.log(newStr);

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

/* Functon =>declaration*/ 
// function test(){
//   console.log('Hi');
//   console.log(10 + 10);
// } 
// // invoking calling a function
// test();

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

/* function => parametr/argument*/
// function person(name){ //name is parametr
//   return 'John' + ' ' + name
// }
// console.log(person('Special')); //'special' is argument

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
let str = 'John';
console.log(str.startsWith('J'));
console.log(str.endsWith('W'));
/////////////////////////////////