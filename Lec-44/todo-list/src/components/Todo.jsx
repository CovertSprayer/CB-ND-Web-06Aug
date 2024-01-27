import React from 'react'
import { FaTrash } from "react-icons/fa";
import './Todo.css'

const Todo = (props) => {
  return (
    <li>
        <input onClick={()=> props.completeHandler(props.todo.id)} type="checkbox" defaultChecked={props.todo.complete} />
        <span style={{textDecoration: props.todo.complete && 'line-through'}} >{props.todo.text}</span>
        <span onClick={()=>{props.deleteTodo(props.todo.id)}}><FaTrash/></span>
    </li>
  )
}

export default Todo