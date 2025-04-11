//Comparison
let x = 8;
let y = 12;

//Initial Solution
if (x > y) {
    console.log("X is Greater Than Y");
}

if (x <= y) {
    console.log("X is Equal Or Less than Y");
}

if (x == y) {
    console.log("X is Equal To Y")
}

if (x !== y) {
    console.log("X Is Not Equal To Y")
}

//OPTIMIZED

if (x >= y) {
    console.log("X Is Equal Or Greater Than Y");
} else if (x <= y) {
    console.log("X Is Equal Or Less Than Y");
}

//3
let a = true;
let b = false

console.log(a && b)
console.log(a || b)
console.log(!b)

//4
let p = 10;

p+=2
console.log(p)
p-=2
console.log(p)
p*=2
console.log(p)
p/=2
console.log(p)
p%=2