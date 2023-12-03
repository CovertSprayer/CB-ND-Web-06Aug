const list = document.querySelector('.list');
const form = document.querySelector('form');
const inp = document.getElementsByName('todo')[0];

function main(){
    axios.get('http://localhost:5000/todos')
        .then((res)=>{
            list.innerHTML = '';
            const todos = res.data.todos;

            todos.forEach(todo => {
                const li = document.createElement('li');
                li.innerText = todo;
                list.append(li);
            });
            
        })

}

main();

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const todo = inp.value;
    inp.value = '';

    axios.post('/todos', {todo})
        .then(()=>{
            main();
        })
        .catch((err)=>console.log(err));
})