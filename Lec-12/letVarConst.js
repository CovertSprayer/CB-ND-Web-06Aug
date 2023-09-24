// var a;       // declaration
// a = 10;      // initialization

var a = 10;
a = 20;         // re-initialization

var a = 30;     //re-decleration
console.log(a);


// ------------ let 
let b = 200;
b = 400; // re-initialization

// let b = 500; // error in re-decleration
console.log(b);


// ------------- const
const c = 500;
// c = 100;        // error

// const c = 200; // error
console.log(c);


function calc(y){
    if(y>5){
        var a1 = 'var a1, Inside if block';
        let b1 = 'let b1, Inside if block';
        const c1 = 'const c1, Inside if block'
    }
    else{
        // console.log(a1)
        // console.log(b1)
        // console.log(c1)
    }   
    console.log(a1)
    console.log(b1)
    console.log(c1)
}

// calc(12);

// console.log(str);
// var str;

// console.log(newStr)
// let newStr;

