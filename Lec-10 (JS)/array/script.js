var arr = [2, 3, true, 'hello'];
console.log(typeof arr);

// console.log(arr[0], arr[1])
var newArr = ['a', 'b', 'c', 'd'];
console.log(arr);

// changes yha krenge
arr.push(500);
arr.push([true, false])

arr.pop();
arr.pop();
// arr.pop();
// arr.pop();
// var lastValue = arr.pop().pop();
arr.shift();
arr.unshift('FI')

// arr.splice(2, 0, false, 100)
// arr.splice(2, 1, false);
// arr.splice(2)

// console.log(lastValue)
console.log(arr);

// var nayaArr = arr.concat(newArr);
var nayaArr = newArr.concat(arr);
console.log(nayaArr)
nayaArr.push('hello')
console.log(nayaArr.indexOf('hello'))

var alphabats = nayaArr.slice(1,4);
console.log(alphabats);
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr.length)

// arr[2] = false;
// console.log(arr);

// arr[6] = 10;

// console.log(arr[6]);
// console.log(arr);

// console.log(arr[5]);

// var arr2 = [2, 4, ['a', 'b', 'c']];

// console.log(arr2[2]);