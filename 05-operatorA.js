console.log("==================================== Task1 ====================================");

function squareOfWordLength(str){
   var strLength= str.length;
   var strLengthSqr=strLength*strLength;
   return {strLengthSqr,strLength};
   
}
var result=squareOfWordLength("JavaScript");
console.log(`the length of word JavaScript is: ${result.strLength} and length square of word JavaScript is: ${result.strLengthSqr} `);

var result=squareOfWordLength("Google Chrome");
console.log(`the length of word Google Chrome is: ${result.strLength} and length square of word Google Chrome is: ${result.strLengthSqr} `);

var result=squareOfWordLength("Web Developer Smart");
console.log(`the length of word Web Developer Smart is: ${result.strLength} and length square of word Web Developer Smart is: ${result.strLengthSqr} `);

console.log("==================================== Task2 ====================================");

function task(){
    var str="I am MERN stack developer"
    var strLen=str.length;
    var totalWord=str.split(" ").length;
    var result=strLen/totalWord;
    console.log(`length of the string is : ${strLen} and after dividing by total number of words is: ${result}`);
    
    var result2=strLen*totalWord;
    console.log(`length of the string is : ${strLen} and after multiplying by total number of words is: ${result2}`);

}
task();