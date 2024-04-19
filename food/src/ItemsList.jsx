import React from 'react'
import Items from './Items'
import "./ItemsList.css"

const ItemsList = () => {
    const items =[
        {
            id:1,
            desc:"item 1",
            price:150
        },
        {
            id:2,
            desc:"item 2",
            price:250
        },
        {
            id:3,
            desc:"item 3",
            price:350
        }
    ]
  return (
    <div className='container'>
        {items.map((item)=>{
            return(
                <Items key={item.id} product={item}/>
            )
        })}
    </div>
  )
}

export default ItemsList