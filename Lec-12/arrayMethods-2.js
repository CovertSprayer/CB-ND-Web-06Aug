let arr = [1,2,3,4,5,6,7];
console.log(arr);

let newArr = arr.map((num, index)=>{
    if(index%2===0){
        return num+10;
    }
    return num;
})

let filteredArr = arr.filter((num, index)=>{
    // if(num%2===0){
    //     return true;
    // }
    // else return false;
    return num%2!==0;
})

let sum = arr.reduce((acc, num, index, arr)=>{
    return acc + num;
}, 0)

let numbers = [-23,2,0,19,34,23,6,36,7]

let sortedArray = numbers.sort((a,b)=>{
    // return a-b; // increasing // abcd..xyz
    return b-a; // decreasing
})

console.log(sum);
console.log(newArr)
console.log(filteredArr);
console.log(sortedArray);
