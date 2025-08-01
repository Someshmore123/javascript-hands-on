console.log("==================== String Assignment 02 ====================");


function stringHandOn() {
    console.log("====================  1 ====================");

    var str = "   Hey you are doing good, Keep it up  ";
    console.log(`printing string as it is : ${str}`);
    console.log("====================  2 ====================");

    var strLength = str.length;
    console.log(`Length of string : ${strLength}`);
    console.log("====================  3 ====================");

    var trimmedStr = str.trim();
    var trimmedStrLength = trimmedStr.length;
    console.log(`Before removing trailing and leading extra spaces from string : ${str}`);
    console.log(`Before removing trailing and leading extra spaces from string the string length is : ${strLength}`);

    console.log(`After removing trailing and leading extra spaces from string : ${trimmedStr} `);
    console.log(`After removing trailing and leading extra spaces from string the string length is : ${trimmedStrLength}`);
    console.log("====================  4 ====================");

    var firstChar = trimmedStr.charAt(0);
    console.log(`first character of string after string: ${firstChar}`);
    var lastChar = trimmedStr.charAt(trimmedStr.length - 1);
    console.log(`last character of string after string: ${lastChar}`);
    console.log("====================  5 ====================");

    var wordCount = trimmedStr.split(" ");
    console.log(`Total number of words: ${wordCount.length}`);
    console.log("====================  6 ====================");

    var indexOfg = trimmedStr.indexOf("good");
    console.log(`Index of word good: ${indexOfg}`);
    console.log("====================  7 ====================");

    var subString22 = trimmedStr.substring(22);
    console.log(`substring starting  from index 22 : ${subString22}`);
    console.log("====================  8 ====================");

    var endsWithUp = trimmedStr.endsWith("up");
    console.log(` string Ends with up: ${endsWithUp}`);
    console.log("====================  9 ====================");

    var startsWithHey = trimmedStr.startsWith("Hey");
    console.log(`string Starts with Hey: ${startsWithHey}`);
}
stringHandOn();
