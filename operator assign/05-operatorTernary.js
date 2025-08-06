console.log("==================================== Task1 ====================================");

function maleMarriageEligibility(gender, age, boyName) {
  var ass= gender === "Male" && age >= 21  ? `Hey ${boyName}, you are eligible for Marriage` : `Hey ${boyName}, you are Not eligible for Marriage`;
    return ass;
}

console.log(maleMarriageEligibility("Male", 25, "Billgates"));
console.log(maleMarriageEligibility("Male", 17, "Stew Jobs"));


console.log("==================================== Task2 ====================================");

function femaleMarriageEligibility(gender, age, girlName) {
 var use= gender === "Female" && age >= 18 ? `Hey ${girlName}, you are eligible for Marriage`: `Hey ${girlName}, you are Not eligible for Marriage`;
return use;
}

console.log(femaleMarriageEligibility("Female", 16, "Jenifer"));
console.log(femaleMarriageEligibility("Female", 27, "Malinda Gates"));
