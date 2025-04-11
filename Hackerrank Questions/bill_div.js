function bonAppetit(bill, k, b) {
    // Write your code here
let total_shared = 0;

for (let i = 0; i < bill.length; i++) {
  if (i !== k) { // skip the item Anna didn't eat
    total_shared += bill[i];
  }
}

let actual = total_shared / 2;

if (b === actual) {
  console.log("Bon Appetit");
} else {
  console.log(b - actual);
}
}  