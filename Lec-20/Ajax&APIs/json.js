const data = {
    fname:'Abhishek',
    lname:'Rathore',
    age:26,
    isAdult:true,
    profession:['Web Developer', 'SDE-2', 'Trainer'],
    sayHello:()=>{
        console.log('hello');
    }
}

// console.log(data.isAdult)
// console.log(data.age)
// console.log(data.sayHello())

const strData = JSON.stringify(data);
console.log(strData)


const objData = JSON.parse(strData);
console.log(objData);
