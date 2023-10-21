
let item = {
    count:0,
    updateCount: function(){
        this.count++;
        console.log(this);
    }
}

const btn = document.querySelector('button');
btn.addEventListener('click', item.updateCount.bind(item))

function updateStudent(naam, age){
    this.naam = naam;
    this.age = age;
}

student = {
    naam:'Abhishek',
    age:25
}

let fun = updateStudent.bind(student);
fun('abcd', 837)
console.log(student)
