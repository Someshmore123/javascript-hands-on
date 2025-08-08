
console.log("==========Reversed String==========");

function reverseString(str) {
    var reverse="";
    for (let index = str.length-1; index>=0; index--) {
        var char = str.charAt(index);
        if(char !== " "){
                        reverse= reverse + char;
        }
 }

console.log(`Given string is : ${str} and after reversing the string : ${reverse}`);
    
}
reverseString("Hard work always pay back");
reverseString("Soon I will be angular IT Champ");