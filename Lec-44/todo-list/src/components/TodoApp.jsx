import React, { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid';
import TodoList from './TodoList';
import InputForm from './InputForm';

const TodoApp = () => {
  // const dummyData = [
  //   {id:uuid(), text:'Coding', complete: false},
  //   {id:uuid(), text:'Do some Gaming', complete: false},
  //   {id:uuid(), text:'Do some Gossips', complete: false},
  //   {id:uuid(), text:'Buy some gift for her', complete: false}
  // ]  

  const data = JSON.parse(localStorage.getItem('todos') || '[]');
  const [todos, setTodos] = useState(data);

  console.log(todos);

  function addTodo(todo){
    setTodos([...todos, todo]);
  }

  function deleteTodo(id){
    // const updatedTodos = todos.filter(todo => todo.id != id);
    // setTodos(updatedTodos);
    setTodos((prevState)=>{
      return prevState.filter(todo => todo.id !== id);
    });
  }

  function completeHandler(id){
    setTodos(prevState => {
      return prevState.map(todo => todo.id === id ? {...todo, "complete": !todo.complete} : todo)
    })
    // const updatedTodo = todos.map(todo => {
    //   if(todo.id == id){
    //     return {...todo, complete: !todo.complete};
    //   }else {
    //     return todo;
    //   }
    // })

    // setTodos(updatedTodo);
  }

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  return (
    <div>
        <InputForm addTodo={addTodo}/>
        <TodoList todos={todos} deleteTodo={deleteTodo} completeHandler = {completeHandler}/>
    </div>
  )
}

export default TodoApp