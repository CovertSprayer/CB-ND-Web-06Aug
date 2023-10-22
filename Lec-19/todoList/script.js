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
                    <input id="check" type="checkbox">
                    <p id="text">${text}</p>
                </div>
                <div class="section-B">
                    <li id="up-arrow">🔼</li>
                    <li id="bin">🗑️</li>
                    <li id="down-arrow">🔽</li>
                </div>`

    todo.innerHTML = str;

    todoList.append(todo);
})