import React, { useEffect, useRef, useState } from 'react'
import useHttp from './Common.js';

const Home = () => {
    const  taskInputRef = useRef();
    const [task,setTask] = useState([]);
    const [error,setError] = useState(false);

    const {loading,startAction:fetchReq} = useHttp();

    useEffect(()=>{
        const displayTask = (datas)=>{
            const loadTask = []
            for(let key in datas){
                loadTask.push({id:key,text:datas[key].text})
            }
            setTask(loadTask)
        }
        fetchReq({url:"https://htpp-req-default-rtdb.firebaseio.com/tasks.json"},displayTask)
    },[fetchReq])

    const createdTask = (curTask,data)=>{
        setTask((prevTask)=>{
            return prevTask.concat({id:data.name , text:curTask})
        })
        taskInputRef.current.value="";
    }
    const addTask = ()=>{
        let currentTask = taskInputRef.current.value
        const parameter = {
            url:"https://htpp-req-default-rtdb.firebaseio.com/tasks.json",
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:{text: currentTask}
        }
        if(currentTask.length >0){
            fetchReq(parameter,createdTask.bind(null,currentTask));
            setError(false)
        }else{
            setError(true)
        }
    }
  return (
    <div>
        <label htmlFor="task"></label>
        <input type="text" name="" id="task"  ref={taskInputRef} style={{borderColor:error?"red":"black"}}/>
        <button onClick={addTask}>{loading?"sending Task": "Add Task"}</button>
        <>{loading  && <p>Loading...</p> }</>
        <>{!loading && task.length==0 && <p>No tasks to show</p>}</>
        <>
        {task.map((ts)=>{
            return(
                <li key={ts.id}>{ts.text}</li>
            )
        })}
        </>
    </div>
  )
}

export default Home