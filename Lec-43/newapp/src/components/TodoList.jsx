import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {
    const todoList = props.todos.map(todo =>{
        return <Todo key={todo.id} todo={todo} deleteTodo={props.deleteTodo}/>
    })
  return (
    <div>{todoList}</div>
  )
}

export default TodoList