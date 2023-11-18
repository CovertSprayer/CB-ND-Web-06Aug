
let n = 10;
// console.log(n);

// for(let i=1; i<=n; i++){
//     console.log(i);
// }

function sumOfN(n){
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum += i;
    }
    return sum;
}

console.log(sumOfN(10));

console.log(global);