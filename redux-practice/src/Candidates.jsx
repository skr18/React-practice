import React, { useEffect, useState } from 'react'
import useHttp from './custom-hooks/use-http'
import "./Candidates.css"
import {useDispatch, useSelector} from 'react-redux'
import { taskAction } from './store'
import Card from './Card'
import ConfirmModal from './UI/ConfirmModal'

const Candidates = () => {
  const [showModal,setShowModal] = useState(false)
  const taskList = useSelector((state)=>state.candidates)
  console.log("redux ",taskList)
  const dispatch = useDispatch()
  const {sendReq} = useHttp()
  useEffect(()=>{
      const applyData =(data)=>{
          //console.log("data called ",data)
          let datalist = []
          for(let key in data){
            datalist.push({id:key,name:data[key].name,email:data[key].email,Lastname:data[key].Lastname})
          }
          dispatch(taskAction.addTask(datalist))
      }
      sendReq({url:"https://redux-practice-57af7-default-rtdb.firebaseio.com/candidate.json"},applyData)
  },[sendReq]);

  const handelDelete = (id)=>{
     setShowModal(true)
    
  }

    let content=""
    if(taskList.length ===0){
      content="No records to show!"
    }else{
      content = taskList.map((ele)=>{
        return(
          <Card key={ele.id}  name={ele.name} email={ele.email} lastName={ele.Lastname} id={ele.id} onHandleDelete={handelDelete}/>
        )
      })
    }
    const handleOnConfirm =()=>{
      setShowModal(false)
    }
   
  return (
    <div className='container'>
      <div>
        <h2>List of Candidates</h2>
      </div>
      <div style={{width:"70%"}}>
        {showModal && <ConfirmModal title="delete confirmation" message="are you sure yoy want to delete this record" 
                                    onConfirm={handleOnConfirm} onClick ={handleOnConfirm} />}
        {content}
      </div>
    </div>
  )
}

export default Candidates