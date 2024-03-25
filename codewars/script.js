/////////1st task////////////////
// function removeChar(str){
//     let result = "";
//     for (let i = 1; i < str.length - 1; i++) result += str[i];
//     return result
//    }
//    console.log(removeChar("eloquent"))

/////////2nd task////////////////
function repeatStr (n, s) {
    let result = "";
    for(let i = 0; i < n; i++) result += s;
    return result;
}
    console.log(repeatStr(3, "*"));
    console.log(repeatStr(5, "#"));
  