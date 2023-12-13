import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import apiRequest from './apiRequest';

const Main = () => {
    const [itemlist,setitemlist] = useState([]);
    useEffect(()=>{
        const getitem = async()=>{
            const res = await fetch("http://localhost:3500/items");
            console.log(res)
            if(res.status!==200){
                console.log("error");
            }
            const list = await res.json.stringify();
            //console.log(list);
            setitemlist(list);
        }
        getitem();
    },[])
    var checkboxclicked = async(id)=>{
        const updatedlist = itemlist.map((item)=>item.id ===id?{...item,checked:!item.checked}:item);
        setitemlist(updatedlist);

        const updatedItem = updatedlist.filter((item)=> id===item.id);
        const opt = {
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({checked: updatedItem[0].checked})
        }
        const newurl = "http://localhost:3500/items/"+id;
        const res = apiRequest(newurl,opt);

    }
    var deleteclick = (id)=>{
        const updatedlist = itemlist.filter((item)=>{
            if(id!==item.id){
                return  item;
            }
        })
        setitemlist(updatedlist);
        const opt = {
            method:"DELETE",
        }
        const newurl = "http://localhost:3500/items/"+id;
        const res = apiRequest(newurl,opt);
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