// ()=>{} // function
// () // expression
// (()=>{})(); 

let studentObj = (()=>{
    let student = {
        id:'23FG56',
        naam:'Tushar',
        age:30,
        gender:'M'
    }

    function updateName(name){
        student.naam = name;
    }

    function updateId(_id){
        student.id = _id;
    }

    function print(){
        console.log(student.naam, student.age);
    }
    
    return {
        updateName,
        print
    }

})();


// let age = studentObj.age;
studentObj.updateName('abcd');
studentObj.print();
// console.log(age)