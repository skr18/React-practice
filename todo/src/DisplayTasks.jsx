import React  from "react";
const DisplayTasks = (props)=>{
    //const tasks =  ;
    const deleteTask =(e)=>{
        props.onDelete(e.target.innerText)
    }
    return(
        <div>
        {   
            props.allTasks.map( (task) =>{
                return(
                <p onClick={deleteTask} style={{margin:'5%',backgroundColor:'green'}}>
                    {task}
                </p>
                )
            })
        }
        </div>
      
    )
}

export default DisplayTasks