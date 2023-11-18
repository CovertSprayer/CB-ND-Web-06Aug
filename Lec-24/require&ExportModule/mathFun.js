function add(a,b){
    return a+b;
}

function multiply(a,b){
    return a*b;
}
// console.log(module)

// module.exports = {
//     add, multiply
// }

module.exports.add = add;
module.exports.multiply = multiply;