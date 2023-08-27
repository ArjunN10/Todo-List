import React, { useState } from 'react'
// import Button from 'react-bootstrap/Button';

function AddTask({addTask}) {
    const [value,setValue]=useState("")
    const addItem=()=>{
        addTask(value)
        setValue(" ")
    }
    
  return (
    <>
        <div className='input-container'>
           <input type='text'
            className='input' 
            placeholder='Add a new Task' 
            value={value}
            onChange={(e)=>(setValue(e.target.value))}/>
           <button onClick={addItem} 
           className='add-btn'>ADD</button>
        </div>
    </>
  )
}

export default AddTask