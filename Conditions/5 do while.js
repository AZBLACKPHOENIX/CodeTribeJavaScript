
i=0;
do{
 i++;
 console.log(i)
}while(i<10);

//2
sum =0
do{
    i++;
sum+=i;
}while(i<100);
console.log(sum);

//3
let input=0
number = Math.floor(Math.random() * (10))
console.log(number)
do{
    input=prompt("Enter a number greater than 10")
    if (input>10){
        break;
    }
   }while(input<10);

  
   number = Math.floor((Math.random() * 10)+1)
   console.log(number)
   
do{
    input=prompt("Guess A Number Between 0 And 10")
   }while(input!=number);