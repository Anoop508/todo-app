import React from 'react'
import './Todo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

const Todo = ({todo, getDeleteid, getEditId}) => {
  return (
    <div className='todo'>
        <p>{todo.task}</p>
        <div>
        <FontAwesomeIcon className='edit-icon' icon={faPencil} onClick={()=>getEditId(todo.id)} />
        <FontAwesomeIcon className='delete-icon' icon={faTrash} onClick={()=>getDeleteid(todo.id)} />
        </div>
      
    </div>
  )
}

export default Todo
