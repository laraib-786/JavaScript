"use strict"

console.log("----Map----");


// let mapFunc=(ele)=>{
//     return 2*ele;
// }

// map takes an array and function as argumentfunction 
function map(arr, mapFunc){    
    const mapArr = []; // empty array        // loop though array    
    for(let i=0;i<arr.length;i++) 
    {        
        const result = mapFunc(arr[i]);        
        mapArr.push(result);   
    }   
        return mapArr;
}

let arr=[1,2,3,4,5,6,7,8,9,10];
let result=map(arr,num=>num**3);

console.log(result);


let myfilter=(arr,filterFunc)=>{
    const filterArr=[];
    for(let i=0;i<arr.length;i++) 
    {        
        if(filterFunc(arr[i]))        
            filterArr.push(arr[i]);   
    }   
        return filterArr;

}

console.log(myfilter(arr,num=>num%2===0));
console.log(myfilter(arr,num=>num%3===0));



console.log("---Reduce----")
var arr1 = [100,45,5];
   
function sumofArray(sum, num) {
    return sum - num;
}
function myGeeks(item) {

    return arr1.reduce(sumofArray);
}
console.log(myGeeks());


let arr2=[1,2,3,4]
function reduce(arr2, reducer, initialValue) {   
     let accumulator = initialValue === undefined ? 0 : initialValue        // loop though array    
     for(let i=0;i<arr2.length;i++)       
      accumulator = reducer(accumulator, arr2[i]);    
      return accumulator;
}

const sum = reduce(arr2, (accumulator, currentValue) => accumulator + currentValue);
console.log(sum); // prints 10
const sum2 = reduce(arr2, (accumulator, currentValue) => accumulator + currentValue, 5);
console.log(sum2);// prints 15


function forEach(arr2,sumFunc){
    let sum=1;
    for(let i=0;i<arr2.length;i++)
        sum=sumFunc(sum,arr2[i]);
    return sum;

}


let sum0=forEach(arr2,(sum,item)=>sum*item);
console.log(sum0);
