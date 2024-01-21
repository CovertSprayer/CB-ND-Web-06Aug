import React from 'react'
import { FaTrash } from "react-icons/fa";

const Todo = (props) => {
  return (
    <li>
        <span>{props.todo.text}</span>
        <span onClick={()=>{props.deleteTodo(props.todo.id)}}><FaTrash/></span>
    </li>
  )
}

export default Todo