let temperature = 29;

if (temperature < 0) {
    console.log("It's Freezing!")
} else if (temperature > 0 && temperature < 15) {
    console.log("It's Cold");
} else if (temperature > 15 && temperature <= 25) {
    console.log("It's Mild");
} else if (temperature > 25) {
    console.log("It's Warm");
}
//Changing the variable to test different values for different statements
temperature = 8
switch (true) {
    case temperature < 0:
        console.log("It's Freezing!");
        break;
    case temperature > 0 && temperature < 15:
        console.log("It's Cold");
        break;
    case temperature > 15 && temperature <= 25:
        console.log("It's Mild");
        break;
    case temperature > 25:
        console.log("It's Warm");
        break;
}

