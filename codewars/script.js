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
function smash (words) {
    const sentence = words.join(' ');
    return sentence;
}
const words = ['hello', 'world', 'this', 'is', 'great'];
console.log(smash(words));