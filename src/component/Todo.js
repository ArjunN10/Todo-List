import React, { useState } from 'react'
import "./Todo.css"
import AddTask from './AddTask'
import ListTasks from './ListTasks'

function Todo() {
  const [task,settask]=useState([
   
  ]);
  const addTask=(title)=>{
  const newTask=[...task,{title}]
  settask(newTask)
  };
  const removeTask=(index)=>{
    const newTask=[...task]
    newTask.splice(index,1)
    settask(newTask)
  }
  return (
    <div className='todo-container'>
      <div className='header'>TODO APP</div>
      <div className='add-task'>
      <AddTask addTask={addTask}/>
      </div>
      <div className='tasks'>
        {task.map((task,index)=>(
          <ListTasks task={task}removeTask={removeTask} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default Todo