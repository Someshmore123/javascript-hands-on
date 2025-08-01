console.log( "==================== String Basic Assignment using string template ====================");

function stringBasics() {
  console.log("==================== TASK 1 ====================");

  var dreamComp = "Amazon";
  console.log(`'My dream company is ${dreamComp}'`);

  console.log("==================== TASK 2 ====================");

  var hobby1 = "Listening Music";
  var hobby2 = "Travelling";
  var hobby3 = "Treaking";
  console.log(`My Hobbies are :${hobby1},${hobby2},${hobby3}`);

  console.log("==================== TASK 3 ====================");

  var totalNumOfChar = hobby1.length + hobby2.length + hobby3.length;
  console.log(`Sum of the total number of character is : ${totalNumOfChar}`);
}
stringBasics();
