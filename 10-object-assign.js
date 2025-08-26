let professor = {
    firstName:"Gajanan",
    lastName:"Kharat",
    age: 35,
    isMarried: true,
    designation:"Professor",
    degrees:{
        engineering:"CSC",
        PHD:"Adv Computing",
        masters:"Software Engineering",
    },
    certificates:["Hacker Rank Participation","Certificate in Adv Programming"]
};
console.log(professor);
console.table(professor);

console.log("========Adding property in object=========");
professor.totalExperience="14 years";
console.log("Adding new property in object : ",professor.totalExperience);

console.log("========Updating existing propety=========");
professor.designation="Developer";
console.log("Modifying existing propety from object : ",professor.designation);

console.log("========Adding new Certificate=========");
professor.certificates.splice(2,0,"Oracle Certified");
console.log("Adding new Certificate at the 2nd index of array :",professor.certificates);

console.log("========Last Element of array=========");
const lastElement=professor.certificates[professor.certificates.length-1];
console.log("Last element of array : ",lastElement);

console.log("========Traverse the array =========");
console.log(professor.certificates);
for (const element of professor.certificates) {
    console.log(element);  
}



