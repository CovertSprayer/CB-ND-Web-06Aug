
function Student(name, age, address){
    this.name = name;
    this.age = age;
    this.address = address;
/*
    this.print = function(){
        // console.log('Name: ', this.name, 'Age: ', this.age,  'Address: ', this.address)
        console.log(`Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`)
    }
*/
}

Student.prototype.print = function(){
    console.log(`Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`)
}

let student1 = new Student('Kartik', 20, 'Noida, India');
let student2 = new Student('Aman', 30, 'New Delhi, India');


let arr = [1,2,3,4]

console.log(Student.prototype === student1.__proto__)   //true
console.log(Array.prototype === arr.__proto__) //true
console.log(Array.prototype.__proto__ === Object.prototype); //true
console.log(Function.prototype.__proto__ === Object.prototype); //true
console.log(String.prototype.__proto__ === Object.prototype); //true
console.log(Number.prototype.__proto__ === Object.prototype); //true
console.log(Boolean.prototype.__proto__ === Object.prototype); //true



console.log(arr.__proto__) // Array.prototype
arr.pop() // [1,2,3]

Array.prototype.sayHello = function () {
    console.log('Hello');
}

arr.push(40) [1,2,3,40]

arr.sayHello() // 'Hello'

Array.prototype.pop = function(){
    console.log('Mai toh ni karra pop!!')
}

arr.pop() // Mai toh ni karra pop!!
