
// ----------- default binding
// console.log(this);

function x(){
    console.log(this);
}

// x();

// ------------- implict binding

let obj = {
    a:50,
    b:true,
    c:function(){
        console.log(this);
    }
}

// obj.c();

// -------------- explict binding
// call(), bind(), apply()


let person1 = {
    name:'Anurag',
    age:40,
    add:'Delhi, India',
    isAdult:true
}

let person2 = {
    name:'Sayam',
    age:16,
    add:'Delhi, India',
    isAdult:false
}

function updatePerson(age, add){
    this.age = age;
    (age>=18) ? this.isAdult = true : this.isAdult= false;
    this.add = add;
    console.log('this keyword', this)
}

console.log(person1);
console.log(person2);

const data = [20000, 'Mumbai, India']

updatePerson.call(person2, 10, 'Gujrat, Ind');
updatePerson.apply(person1, data)

// console.log(person1);
// console.log(person2);


function Car(color, wheels, milage){
    this.color = color;
    this.wheels = wheels;
    this.milega = milage

    this.print = function(){
        console.log(this.color, this.wheels, this.milega);
    }
}

let c1 = new Car('black', 4, '12kmpl');
console.log(c1);
c1.print();

let c2 = new Car('Red', '3', '30kmpl');
console.log(c2);
c2.print();

