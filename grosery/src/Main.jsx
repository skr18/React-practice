import React from 'react'
import { useState } from 'react';

const Main = () => {
    const [itemlist,setitemlist] = useState([
        {
            id:1,
            title:"food",
            checked:true
        },
        {
            id:2,
            title:"water",
            checked:false
        },
        {
            id:3,
            title:"oil",
            checked:false
        }, 
    ])
    var checkboxclicked = (id)=>{
        const updatedlist = itemlist.map((item)=>item.id ===id?{...item,checked:!item.checked}:item)
        setitemlist(updatedlist);
    }
    var deleteclick = (id)=>{
        const updatedlist = itemlist.filter((item)=>{
            if(id!==item.id){
                return  item;
            }
        })
        setitemlist(updatedlist);
    }
  return (
    <div>
        {
            itemlist.map((item)=>(
                <ul key={item.id} > 
                    <label style={(item.checked )?{textDecoration:"line-through"}:null}>{item.title}</label>
                    <input type="checkbox" checked={item.checked} onChange={()=>checkboxclicked(item.id)}  />
                    <button onClick={()=> deleteclick(item.id)}>Delete</button>
                </ul>
            ))
        }
    </div>
  )
}

export default Main