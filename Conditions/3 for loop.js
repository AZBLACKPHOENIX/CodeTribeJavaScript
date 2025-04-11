for (let i = 1; i < 11; i++) {
    console.log(i)
}

//2
for (let i = 0; i < 20; i++) {
    if (i % 2 == 0 && i !== 0) {
        console.log(i)
    }
}

//3
let sum = 0;
for (let i = 0; i < 100; i++) {
    sum += i
}
console.log(sum)

//4
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

console.log("Largest Number")
//5
const nums = [3, 7, 2, 5,10, 6];
var large =0;

for(let i =0; i<nums.length;i++){
    if (nums[i] > large ){
        large = nums[i];
    }
}
console.log(large)

