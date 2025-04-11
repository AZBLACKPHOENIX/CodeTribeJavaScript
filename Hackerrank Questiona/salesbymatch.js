let ar = [0, 10, 20, 20, 10, 10, 30, 50, 10, 20];
let n=0;
//Sort the array first
ar.sort()
for (let i=0; i<ar.length;i++)
{
    //Compare the start and it's next element
    if (ar[i]!==ar[i+1]){
        i++;
        n++;
    }
}
console.log(n)