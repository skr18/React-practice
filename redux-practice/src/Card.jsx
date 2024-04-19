import React from 'react'
import "./Card.css"


const Card = (props) => {
    console.log("p - ",props)
    const {name,lastName,email,id,onHandleDelete} = props
    const handleDeleteClick = (id)=>{
       
    }
    const handleActionButton = ()=>{

    }
    const handleEdit = ()=>{

    }
    const handelDelete = (id)=>{
        props.onHandleDelete(id)
    }
  return (
      <div className='Cardcontainer'>
        <div className='flexContainer'>
            <div><b>Name:</b> {name}</div>
            <div><b>Last Name:</b> {lastName}</div>
        </div>
        <div className='flexContainer'>
            <div><b>Email:</b> {email}</div>
            <div className='actionContainer'> 
                <button className='cardButton' style={{marginRight:'5px'}}>Edit</button>
                <button className='cardButton' onClick={()=>onHandleDelete(id)}>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default Card