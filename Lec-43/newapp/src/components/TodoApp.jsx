import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';
import TodoList from './TodoList';
import InputForm from './InputForm';

const TodoApp = () => {
  const dummyData = [
    {id:uuid(), text:'Coding'},
    {id:uuid(), text:'Do some Gaming'},
    {id:uuid(), text:'Do some Gossips'},
    {id:uuid(), text:'Buy some gift for her'}
  ]  

  const [todos, setTodos] = useState(dummyData);


  function addTodo(todo){
    setTodos([...todos, todo]);
  }

  function deleteTodo(id){
    const updatedTodos = todos.filter(todo => todo.id != id);
    setTodos(updatedTodos);
  }

  return (
    <div>
        <InputForm addTodo={addTodo}/>
        <TodoList todos={todos} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default TodoApp