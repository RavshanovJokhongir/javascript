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
//     return `Hello, ${name}! How are you doing today?`;
// }
// console.log(greet("Alice")); 
// console.log(greet("Bob"));


//////////10th task/////////////////////////////////////
// function reverseWords(str){
//     return str.split(" ").reverse().join(" ");
//   }
//   console.log(reverseWords("hello world!"                 ));


//////////11th task ////////////////////////////////
function splitStringIntoArray(str) {
  return str.split(" ");
}

// Test the function
console.log(splitStringIntoArray("Robin Singh")); 