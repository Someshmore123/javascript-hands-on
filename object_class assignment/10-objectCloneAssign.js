let bankSbi={
    bankName:"Sbi",
    AccType:"current",
    ifscCode:456789456,
    Manager:"Thomas"
};
console.log("Bank SBI Details:", bankSbi);
console.log("------------------------------------------------");

let bankLocation = {
    street: "Someshwar-Murum Road",
    city: "Baramati",
    pin: 412306
};
console.log("Bank Location:", bankLocation);
console.log("------------------------------------------------");

const cloneSbi = Object.assign({}, bankSbi);
console.log(`Cloned SBI Details: Bank Name: ${cloneSbi.bankName}, Account Type: ${cloneSbi.AccType}, IFSC: ${cloneSbi.ifscCode}, Manager: ${cloneSbi.Manager}`);
const cloneLocation = Object.assign({}, bankLocation);
console.log(`Cloned Location: Street: ${cloneLocation.street}, City: ${cloneLocation.city}, Pin: ${cloneLocation.pin}`);

console.log("------------------------------------------------");

let rateOfInterest = {
    homeLoanInterest: "7.5%",
    personalLoanInterest: "10.5%",
    duelInterest: "6.5%"
};
console.log("Rate of Interest:", rateOfInterest);
console.log("------------------------------------------------");

let sbiDetails=Object.assign({},bankSbi,bankLocation,rateOfInterest);
console.log("Merged SBI Details:");
console.table( sbiDetails);

console.log("------------------------------------------------");

for (let key in sbiDetails) {
   const value=sbiDetails[key] ;
   console.log(`${key}:${value}`);
   
}