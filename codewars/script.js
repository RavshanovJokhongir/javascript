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
function noSpace(x) {
    let result = '';
    for(let i = 0; i < x.length; i++){
        if(x[i] === ' ') {
            continue;
        }else {
            result += x[i];
        }
    }
    return result;
}
console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));