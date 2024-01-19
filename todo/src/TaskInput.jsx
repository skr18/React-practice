import React, { useState } from 'react'
import './TaskInput.css'
const TaskInput = (props) => {
  const [task,setTaskValue] = useState('');
  const [isEmpty,setisEmpty] = useState(true);

  const inputHandler = event =>{
    setTaskValue(event.target.value)
  }

  const addTask = (event)=>{
    event.preventDefault();
    if(task.trim().length === 0){
      setisEmpty(false)
      return;
    }
    props.onAddGoal(task);
    setTaskValue('')
  }

 
  return (
    <div className='container'>
        <label style={{color:!isEmpty?"red":"black"}}>Task</label>
        <input type="text" onChange={inputHandler} value={task}/>
        <button type="button" onClick={addTask}  >Add</button>
    </div>
  )
}

export default TaskInput