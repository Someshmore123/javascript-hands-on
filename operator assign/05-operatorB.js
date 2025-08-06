console.log("==================================== Task1 ====================================");

function greaterNumber(num1 ,num2){
    var result=num1>num2 ? num1:num2;
console.log(`the greater number among ${num1} and ${num2} is : ${result}`);
}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log("==================================== Task2 ====================================");

function evenOrOddNum(val) {
    var result= val%2 == 0 ?"even" : "odd";
    return result;
    
}
var returnValue=evenOrOddNum(29);
console.log(`Given number is 29 and it is ${returnValue}`);
var returnValue=evenOrOddNum(44);
console.log(`Given number is 44 and it is ${returnValue}`);
var returnValue=evenOrOddNum(0);
console.log(`Given number is 0 and it is ${returnValue}`);
var returnValue=evenOrOddNum(101);
console.log(`Given number is 101 and it is ${returnValue}`);

console.log("==================================== Task3 ====================================");

function wordLength(str) {
   var result= str.length %2 == 0 ? "Even":"Odd";
   return result;
}
var resultValue=wordLength("javascript");
console.log(`Given word is javascript  and it is ${resultValue}`);

var resultValue=wordLength("Developer");
console.log(`Given word is Developer  and it is ${resultValue}`);

var resultValue=wordLength("Google");
console.log(`Given word is Google  and it is ${resultValue}`);