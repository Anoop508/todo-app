import React, { useState } from 'react'
import FormTodo from './FormTodo'
import Todo from './Todo'
import { v4 as uuidv4 } from 'uuid';
import EditFormTodo from './EditFormTodo';

const TodoWrapper = () => {

    const [todo, setTodo] = useState([])

    const setTask = (task) =>{
        setTodo([...todo, {id: uuidv4(), task:task, isEditing:false, isCompleted:false }])
    }

    const getDeleteid = (id) =>{
        // console.log(id)
        setTodo(
            todo.filter((item)=> item.id !== id )
        )
    }

    const getEditId = (id) =>{
        // console.log(id)
        setTodo(
            todo.map((item)=>(
                (item.id === id) ? {...item, isEditing:true}: item
            ))
        )
    }

    const updateTask = (task, id) => {
        setTodo(
            todo.map((item)=>(
                (item.id === id)?{...item, task:task, isEditing:false}:item
            ))
        )
    } 

  return (
    <div>
      <FormTodo setTask={setTask}/>
      {
        todo.map((item, index)=>(
            item.isEditing ===true?
            <EditFormTodo todo={item} updateTask={updateTask}/>
            :
            <Todo todo={item} getDeleteid={getDeleteid} getEditId={getEditId}/>
        ))
      }
      
    </div>
  )
}

export default TodoWrapper
