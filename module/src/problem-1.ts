// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

function sumArray( arr:number[]):number{
       return arr.reduce((acc, currentEle)=>{
            return acc = acc+ currentEle;
        },0)
 }

// console.log(sumArray([3,4,5,6,7]));