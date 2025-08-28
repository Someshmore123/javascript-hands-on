
function Bank(bankName, location, ifscCode, branchCode) {
  this.bankName = bankName;
  this.location = location;
  this.ifscCode = ifscCode;
  this.branchCode = branchCode;
}


Bank.prototype.openTime = "9 AM IST";

Bank.prototype.closeTime = "6 PM IST";

const yesBank = new Bank("Yes Bank", "Mumbai", "YESB0000123", "YESMUM01");
const sbiBank = new Bank("State Bank of India", "Hyderabad", "SBIN0000456", "SBHYD02");
const mahBank = new Bank("Mah Bank", "Pune", "MAHB0000789", "MAHPUN03");
const axisBank = new Bank("Axis Bank", "Bengaluru", "UTIB0000999", "UTIBLR04");


console.log(`Bank Details is: ${yesBank.bankName}, ${yesBank.location}, ${yesBank.ifscCode}, ${yesBank.branchCode}`);
console.log(`Bank Details is: ${sbiBank.bankName}, ${sbiBank.location}, ${sbiBank.ifscCode}, ${sbiBank.branchCode}`);
console.log(`Bank Details is: ${mahBank.bankName}, ${mahBank.location}, ${mahBank.ifscCode}, ${mahBank.branchCode}`);
console.log(`Bank Details is: ${axisBank.bankName}, ${axisBank.location}, ${axisBank.ifscCode}, ${axisBank.branchCode}`);


console.log(`SBI timings :Open: ${sbiBank.openTime}, Close: ${sbiBank.closeTime}`);

console.log(`Axis Bank info : Name: ${axisBank.bankName}, Closes at: ${axisBank.closeTime}`);


console.log(`Yes Bank info : Name: ${yesBank.bankName}, Branch Code: ${yesBank.branchCode}, Opens at: ${yesBank.openTime}`);


console.log(`Mah Bank timings : Open: ${mahBank.openTime}, Close: ${mahBank.closeTime}`);


