// -------------------- spread operator
let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];

// let arr = arr1.concat(arr2)

// let arr = [...arr1, ...arr2];
let arr = [...arr2, ...arr1];
console.log(arr);

// --------------------- rest operator
function add(a,b, ...c){
    // console.log(c);
    let ans = c.reduce((acc, num)=>{
        return acc + num;
    }, 0)

    ans += a+b;
    return ans;
}

console.log(add(2,5,6,8,2, 20));