// strongly typed vs weakly typed

var str = 'This is some string';
// str = 20;
console.log(str);
// console.log(typeof str)

// strong equality vs loose equality
var a = 10;
var b = '10';

// console.log(a === b);

// console.log(str.toUpperCase())
// console.log(str.toLowerCase())

// var newStr = str.replace('is', 'IS')
// var newStr = str.replaceAll('is', 'IS')

// var newStr = str.indexOf('is')
var newStr = str.split(' ')

var photo1 = 'profile.jpg';
var format = photo1.split('.').pop();

if(['jpg', 'jpeg', 'png'].indexOf(format) !== -1){
    console.log('success');
}else{
    console.log('failure');
}

console.log(newStr);