
// function
// funcitons are also datatypes here in js
// you can store, pass/return, accept functions like string, number, boolean etc

// function defination
function printHello(){
    console.log('Hello')
}

//function calling
printHello() 
const returnValue = printHello();
console.log(returnValue);

let randomFunction = printHello;
console.log(randomFunction);
randomFunction();

let anotherRandomFun = function anotherPrintHello(){
    console.log('Hello')
}

// anotherPrintHello(); //error
anotherRandomFun();


let anotherRandomFun2 = function (){
    console.log('Hello in anotherRandomFun2')
}
anotherRandomFun2();


