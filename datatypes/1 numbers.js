//Declare variables
let number = 20;
let fl_value = 2.5
let sum, sub, mult, div, mod, exp = 0;

//Make caclulations

sum = number + fl_value;
sub = number - fl_value;
mult = number * fl_value;
div = number / fl_value;
mod = number % fl_value;
exp = number ** fl_value;

//Make output
console.log("Value 1: ", number, "     |      Value 2: ", fl_value)
console.log("Sum      :", sum);
console.log("Divide   :", div.toFixed(2));
console.log("Multiply :", mult);
console.log("Subtract :", sub);
console.log("Mod      :" + mod);
console.log("Exponent :" + exp);