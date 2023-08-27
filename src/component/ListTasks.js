import React from 'react'
// import Button from 'react-bootstrap/Button';
function ListTasks({task,index,removeTask}) {
  return (
    <>
        <div className='list-tasks'>
          {task.title}
            <button onClick={()=>{removeTask(index)}}
            className='delete-btn' >Delete</button>
        </div>
    </>
  )
}

export default ListTasks