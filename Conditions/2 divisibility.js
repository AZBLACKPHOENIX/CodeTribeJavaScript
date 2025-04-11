let value = 11;

if (value % 2 == 0 && value % 3 !== 0) {
    console.log("Divisible by 2")
} else if (value % 3 == 0 && value % 2 !== 0) {
    console.log("Divisible by 3")
} else if (value % 2 == 0 && value % 3 == 0) {
    console.log("Divisible by 2 and 3")
} else {
    console.log("Not visible by 2 or 3")
}

//use switch
let key = "";

if (value % 2 === 0) key += "2";
if (value % 3 === 0) key += "3";

switch (key) {
  case "2":
    console.log("Divisible by 2");
    break;
  case "3":
    console.log("Divisible by 3");
    break;
  case "23":
    console.log("Divisible by 2 and 3");
    break;
  default:
    console.log("Not divisible by 2 or 3");
}
