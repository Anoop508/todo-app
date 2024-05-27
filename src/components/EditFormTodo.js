import React, { useState } from 'react'
import './FormTodo.css'

const EditFormTodo = ({updateTask, todo}) => {
    const [value, setValue] = useState(todo.task);

    const handleSubmit = (e) =>{
        e.preventDefault();
        updateTask(value, todo.id);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type='text' className='input-task' value={value} onChange={(e)=>setValue(e.target.value)}/>
        <button type='submit' className='btn'>Update Task</button>
        </form>
    </div>
  )
}

export default EditFormTodo
