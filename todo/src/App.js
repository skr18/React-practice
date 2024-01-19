import { useState } from "react";
import TaskInput from "./TaskInput";
import DisplayTasks from "./DisplayTasks";

function App() {
  const dummy=[
    "first",
    "second"
  ];
  const [tasks,setTasks] = useState(dummy)
  const updateGoal =(newTask)=>{
    setTasks((prevTask)=>{
      return [newTask , ...prevTask];
    })
  }
  const deleteTask = (deletedTask)=>{
    const updatedTasks = tasks.filter((task)=>{
      return task!==deletedTask
    })
    setTasks(updatedTasks)
  }
  return (
      <div>
        <TaskInput onAddGoal = {updateGoal}/>
        <DisplayTasks allTasks ={tasks} onDelete={deleteTask}/>
      </div>
  );
}

export default App;
