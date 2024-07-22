//<<<<<<string>>>>>>>>>>>>>>>>>>>>>>>>>

/////////1st task////////////////
// function removeChar(str){
//     let result = "";
//     for (let i = 1; i < str.length - 1; i++) result += str[i];
//     return result
//    }
//    console.log(removeChar("eloquent"))

/////////2nd task////////////////
// function repeatStr (n, s) {
//     let result = "";
//     for(let i = 0; i < n; i++) result += s;
//     return result;
// }
//     console.log(repeatStr(3, "*"));
//     console.log(repeatStr(5, "#"));
  

////////3rd task ///////////////////////
// function noSpace(x) {
//     let result = '';
//     for(let i = 0; i < x.length; i++){
//         if(x[i] === ' ') {
//             continue;
//         }else {
//             result += x[i];
//         }
//     }
//     return result;
// }
// console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));

//////////4th task///////////////////////////////////
// function booleanToString(b){
//     return String(b);
//   }
  
/////// 5th task /////////////////////////////
// function areYouPlayingBanjo(name) {
//    if (name[0] === 'R' || name[0] === 'r') return `${name} plays banjo`;
//    else return ` ${name} does not play banjo`;
//   }
//   console.log(areYouPlayingBanjo('Adam'));


////// 6th task //////////////////////////////////
// function solution(str) {
//     return str.split('').reverse().join('');
// }

// console.log(solution('world')); 
// console.log(solution('word'));

////////7th task //////////////////////////////
// function numberToString(num) {
//     return '"' + num + '"';
// }

// console.log(numberToString(123));


////////8th task ///////////////////////
// const stringToNumber = function(str) {
//     return parseInt(str);
// };

// console.log(stringToNumber("1234"));

////////////9th task ///////////////////////
// function greet(name) {
//     return `Hello, ${name}! how are you doing today?`;
// }
// console.log(greet("Alice")); 
// console.log(greet("Bob"));


//////////10th task/////////////////////////////////////
// function reverseWords(str){
//     return str.split(" ").reverse().join(" ");
//   }
//   console.log(reverseWords("hello world!"                 ));


//////////11th task ////////////////////////////////
// function splitStringIntoArray(str) {
//   return str.split(" ");
// }
// console.log(splitStringIntoArray("Robin Singh")); 

////////// 12th task ////////////////////////////
// function convertToInitials(name) {
//   const words = name.split(" ");
//   const initials = words.map(word => word.charAt(0).toUpperCase()).join(".");
//   return initials;
// }
// console.log(convertToInitials("Sam Harris")); 
// console.log(convertToInitials("patrick feeney")); 


/////////// 13th task //////////////////////////////////
// const sumOfPositives = (array) => {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] > 0) {
//         sum += array[i];
//       }
//     }
//     return sum;
//   };
//   const numbers = [1, -4, 7, 12];
//   console.log(sumOfPositives(numbers)); 
  

//////////// 14th task ////////////////////////////////
// const sumOfPositives = (array) => {
//     return array.reduce((sum, num) => {
//       return num > 0 ? sum + num : sum;
//     }, 0);
//   };
//   const numbers = [1, -4, 7, 12];
//   console.log(sumOfPositives(numbers)); 
  

/////////// 15th task ////////////////////////////////////
// function toCamelCase(str) {
//     return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
//   }
//   console.log(toCamelCase("the-stealth-warrior")); 
//   console.log(toCamelCase("The_Stealth_Warrior")); 
//   console.log(toCamelCase("The_Stealth-Warrior")); 
  
/////////// 16th task ////////////////////////////////////
// function smash (words) {
//     const sentence = words.join(' ');
//     return sentence;
// }
// const words = ['hello', 'world', 'this', 'is', 'great'];
// console.log(smash(words));


/////////// 17th task //////////////////////////////////////////
// function removeExclamationMarks(str) {
//     return str.replace(/!/g, '');
// }
// let inputString = "Hello! How are you doing today?!";
// let result = removeExclamationMarks(inputString);
// console.log(result);


///////////// 18th task //////////////////////////////////////////
// var countSheep = function (num){
//     let newNum = "";
//       for (let i = 1; i <= num; i++) {
//           newNum += i + " sheep...";
//       }
//       return newNum;
//   }
//   console.log(countSheep(3));
// console.log(countSheep(5));


/////////////// 19th task ///////////////////////////////////////
// function sumArrayValues(arr) {
//     return arr.reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0);
// }
// console.log(sumArrayValues([1, "2", 3, "4", 5])); 
// console.log(sumArrayValues(["10", "20", 30, "40"])); 


//////////// 20th task //////////////////////////////////////////////
// function stringy(size) {
//     let result = ""; 
//     for (let i = 0; i < size; i++) {
//         if (i % 2 === 0) {
//             result += "1";
//         } else {
//             result += "0";
//         }
//     }
    
//     return result;
// }
// console.log(stringy(6));  
// console.log(stringy(4));  
// console.log(stringy(12)); 


///////// 21st task ////////////////////////
// function shortcut(inputString) {
//     var vowels = "aeiou";
//     return inputString.split('').filter(function(char) {
//         return vowels.indexOf(char) === -1;
//     }).join('');
// }
// var inputStr = "Hello, how are you?";
// console.log(shortcut(inputStr)); 


/////// 22nd task ////////////////////////////////////
// function formatFirstString(arr) {
//     arr.sort();
//     const firstString = arr[0];
//     const formattedString = firstString.split('').join('***');
    
//     return formattedString;
// }
// const strings = ["hello", "world", "example"];
// const result = formatFirstString(strings);
// console.log(result); 

//////////// 23rd ///////////////////////////////////////////////
// function feast(beast, dish) {
//     const beastFirstLetter = beast.charAt(0);
//     const beastLastLetter = beast.charAt(beast.length - 1);
//     const dishFirstLetter = dish.charAt(0);
//     const dishLastLetter = dish.charAt(dish.length - 1);

//     return beastFirstLetter === dishFirstLetter && beastLastLetter === dishLastLetter;
// }
// console.log(feast("great blue heron", "garlic naan")); 
// console.log(feast("chickadee", "chocolate cake"));
// console.log(feast("tiger", "pasta")); 


//////////// 24th task /////////////////////////////////////////////
// function doubleCharacters(input) {
//     let output = '';
//     for (let i = 0; i < input.length; i++) {
//         output += input[i] + input[i];
//     }
//     return output;
// }
// console.log(doubleCharacters("String"));      
// console.log(doubleCharacters("Hello World"));
// console.log(doubleCharacters("1234!_ "));    



//////// 25th  task /////////////////////////////////////////////////////////
// function swapNames(fullName) {
//     const names = fullName.split(' ');
//     const swappedNames = [names[1], names[0]];
//     return swappedNames.join(' ');
// }
// const fullName = "John McClane";
// const swappedFullName = swapNames(fullName);
// console.log(swappedFullName); 



////// 26th task //////////////////////////////////////////////////////
// function convertToUpperCase(inputString) {
//     return inputString.toUpperCase();
// }

// let originalString = "Hello, World!";
// let upperCaseString = convertToUpperCase(originalString);
// console.log(upperCaseString);

////////// 27th task ////////////////////////////////////////////////////
// function arrayContainsValue(arr, x) {
//     return arr.includes(x);
// }
// const array1 = [1, 2, 3, 4, 5];
// const value1 = 3;
// console.log(arrayContainsValue(array1, value1)); 
// const array2 = ["apple", "banana", "orange"];
// const value2 = "pear";
// console.log(arrayContainsValue(array2, value2)); 

///////////////////// 28th task ///////////////////////////////
// function DNAtoRNA(dna){
//     return dna.replace(/T/g, 'U');
//   }
//   const dnaSequence1 = 'ATTGCATGCTA';
// const rnaSequence1 = DNAtoRNA(dnaSequence1);
// console.log(rnaSequence1); 
// const dnaSequence2 = 'GTATCGCTAGCT';
// const rnaSequence2 = DNAtoRNA(dnaSequence2);
// console.log(rnaSequence2);


///////// 29th task /////////////////////////////////////////
// function getDrinkByProfession(input) {
//   const profession = input.toLowerCase();
//   switch (profession) {
//       case "jabroni":
//           return "Patron Tequila";
//       case "school counselor":
//           return "Anything with Alcohol";
//       case "programmer":
//           return "Hipster Craft Beer";
//       case "bike gang member":
//           return "Moonshine";
//       case "politician":
//           return "Your tax dollars";
//       case "rapper":
//           return "Cristal";
//       default:
//           return "Beer";
//   }
// }
// console.log(getDrinkByProfession("Programmer")); 
// console.log(getDrinkByProfession("pOLitiCIaN")); 
// console.log(getDrinkByProfession("Teacher")); 

/////////30th task /////////////////////////////////////////////////
// function safeHTML(input) {
//     return input.replace(/&/g, "&amp;")
//                 .replace(/</g, "&lt;")
//                 .replace(/>/g, "&gt;")
//                 .replace(/"/g, "&quot;");
// }
// let userInput = 'alert("Hello!")';
// let safeOutput = safeHTML(userInput);
// console.log(safeOutput);

/////////////////////////////////////////////////////////
// function capitalize(word) {
//     if (word.length === 0) return ''; 
//     return word.charAt(0).toUpperCase() + word.slice(1);
//   }
//   console.log(capitalize('hello')); 
//   console.log(capitalize('world')); 
//   console.log(capitalize('javascript')); 
  
//////////////////////////////////////////////////////////////
// const myHonda = {
//   color: "red",
//   wheels: 4,
//   engine: { cylinders: 4, size: 2.2 },
// };
// console.log(myHonda);


///////// 33th task ///////////////////////////////////////////////////
// function mouthSize(animal) {
//   if (animal.toLowerCase() === "alligator") {
//       return "small";
//   } else {
//       return "wide";
//   }
// }

// // Test cases
// console.log(mouthSize("alligator")); 
// console.log(mouthSize("Alligator")); 
// console.log(mouthSize("ALLIGATOR")); 
// console.log(mouthSize("frog")); 
// console.log(mouthSize("elephant"));


///////////// 34th task ///////////////////////////////////////////////////
// function multiplicationTable(number) {
//   if (number < 1 || number > 10) {
//       return "Number must be between 1 and 10";
//   }
//   let table = "";
//   for (let i = 1; i <= 10; i++) {
//       table += `${i} * ${number} = ${i * number}`;
//       if (i < 10) {
//           table += "\n"; 
//   }
// }

//   return table;
// }

// const number = 5;
// console.log(multiplicationTable(number));


////////// 35th task ///////////////////////////////////////////////////////////////
// function extractMiddle(input) {
//   if (!input) return null; 
//   const elements = input.split(',');
//   if (elements.length <= 2) return null; 
//   const middleElements = elements.slice(1, -1); 
//   return middleElements.join(' '); 
// }
// console.log(extractMiddle("1,2,3"));     
// console.log(extractMiddle("1,2,3,4"));    
// console.log(extractMiddle("1,2,3,4,5")); 
// console.log(extractMiddle(""));           
// console.log(extractMiddle("1"));         
// console.log(extractMiddle("1,2"));     


////////////// 36th task ///////////////////////////////////////////////////////////
// function digitize(n) {
//   return String(n).split('').reverse().map(Number);
// }
// console.log(digitize(35231)); 
// console.log(digitize(0));     



///////////// 37th task ///////////////////////////////////////////////////////////
// function findNeedle(haystack) {
//   const position = haystack.indexOf("needle");
//   return "found the needle at position " + position;
// }

// console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));
// console.log(findNeedle(["needle", "hay", "junk", "hay"]));
// console.log(findNeedle(["hay", "hay", "needle", "hay"]));

///////////////// 38th task /////////////////////////////////////////////////////////////
// function doubleArray(arr) {
//   return arr.map(num => num * 2);
// }
// const originalArray = [1, 2, 3];
// const doubledArray = doubleArray(originalArray);
// console.log(doubledArray); 


////////////// 39th task /////////////////////////////////////////////////////////////////
// function incrementString(str) {
//   const match = str.match(/(\d+)$/);
//   if (match) {
//     const number = match[0];
//     const numberLength = number.length;
//     const incrementedNumber = (parseInt(number, 10) + 1).toString();
//     const paddedNumber = incrementedNumber.padStart(numberLength, '0');
//     return str.slice(0, -numberLength) + paddedNumber;
//   } else {
//     return str + '1';
//   }
// }
// console.log(incrementString("foo"));    
// console.log(incrementString("foobar23")); 
// console.log(incrementString("foo0042"));  
// console.log(incrementString("foo9"));    
// console.log(incrementString("foo099"));  


////////////// 40th task /////////////////////////////////////////////////////////////////////////
// function sum(numbers) {
//   return numbers.reduce((acc, curr) => acc + curr, 0);
// }
// console.log(sum([1, 5.2, 4, 0, -1]));   
// console.log(sum([]));                    
// console.log(sum([-2.398]));             


////////// 41th task ///////////////////////////////////////////////////////////////////////////////
// function average(numbers) {
//   if (numbers.length === 0) {
//     return 0;
//   }
//   const sum = numbers.reduce((acc, curr) => acc + curr, 0);
//   const avg = sum / numbers.length;
//   return avg;
// }
// console.log(average([1, 2, 3, 4, 5])); 
// console.log(average([]));              
// console.log(average([7.5, 3.2, 8.1])); 
// console.log(average([-1, 0, 1]));


/////////////////// 42th task ///////////////////////////////////////////////////////////////////
function additiveInverse(arr) {
  return arr.map(num => -num);
}
console.log(additiveInverse([1, 2, 3, 4, 5])); 
console.log(additiveInverse([1, -2, 3, -4, 5])); 
console.log(additiveInverse([])); 




