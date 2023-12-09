import React from 'react'

const Main = () => {
    var items = [
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
            id:1,
            title:"oil",
            checked:false
        }, 
    ];
  return (
    <div>
        {
            items.map((item)=>(
                <ul key={item.id} > 
                    <div>{item.title}</div>
                    <input type="checkbox" name="" id=""  value={item.checked}/>
                </ul>
            ))
        }
    </div>
  )
}

export default Main