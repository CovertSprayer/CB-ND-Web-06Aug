const btn = document.querySelector('.btn');
const inp = document.querySelector('.inp');
const todoList = document.querySelector('.todo-list');
const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const text = inp.value;
    inp.value = '';

    if(text === '') return;

    let todo = document.createElement('div');
    todo.classList.add('todo');

    let str = `<div class="section-A">
                    <input class="check" type="checkbox">
                    <p class="text">${text}</p>
                </div>
                <div class="section-B">
                    <li class="up-arrow">🔼</li>
                    <li class="bin">🗑️</li>
                    <li class="down-arrow">🔽</li>
                </div>`

    todo.innerHTML = str;

    todoList.append(todo);
});

todoList.addEventListener('click', (e)=>{
    const className = e.target.getAttribute('class');

    if(className === 'check'){
        const p = e.target.nextElementSibling
        p.classList.toggle('line');
    }

    if(className === 'bin'){
        console.log(e.target);
        e.target.parentElement.parentElement.remove();
    }

    if(className === 'down-arrow'){
        const curr = e.target.parentElement.parentElement;
        const next = curr.nextElementSibling;

        next.after(curr);
    }

    if(className === 'up-arrow'){
        const curr = e.target.parentElement.parentElement;
        const prev = curr.previousElementSibling;

        prev.before(curr);
    }
})
