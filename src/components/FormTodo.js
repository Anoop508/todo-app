import React, { useState } from 'react'
import './FormTodo.css'

const FormTodo = ({setTask}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        // console.log(value);
        setTask(value);
        setValue('');
    }


  return (
    <div className='todo-form'>
        <form onSubmit={handleSubmit}>
            <input className='input-task' placeholder="Please add todo list" value={value} type="text" onChange={(e)=>setValue(e.target.value)} />
            <button className='btn' type='submit'>Add Task</button>
        </form>
      
    </div>
  )
}

export default FormTodo
