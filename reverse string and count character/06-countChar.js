

console.log("==========Count Character==========");

function countCharA(str) {
    var totalCount = 0;
    for(let i= 0;i<str.length;i++){
        var char = str.charAt(i);
        if (char == "a" || char == "A") {
            totalCount=totalCount+1;
        }
    
    }
    console.log(`given string is : ${str} and total no of character of 'a' and 'A' is : ${totalCount}`);
    
}
countCharA("I AM Learning Javascript, the Language of internet");
countCharA("My favourite movie is LAggAn");
