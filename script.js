
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
const result = /(a+)(b+)(c+)/.exec("aaabcc");
const [, a, b, c] = result;
console.log(a, b, c); 






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

/*---------*/
// let fruit = 'apple';
// let kg = 1;


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
/*  for loop 4th example*/
// for(let i = 1; i <= 10; i++){
//     if(i %2 === 0){
//         console.log(i, 'odd number');
//     }else {
//         console.log(i, 'even number');
//     }
// }

/* do while statement */
// let i = 0;
// do {
//   i += 1;
//   console.log(i);
// } while (i < 5);

// let n = 0;
// let x = 0;
// while (n < 3) {
//   n++;
//   x += n;
// }
// console.log(n);