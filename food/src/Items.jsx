import React, { useState } from 'react'
import ItemsContext from "./UseContext/items-context"
import "./Items.css"

const Items = (props) => {
  const [itemcnt, setItemcnt] = useState(0)
  const updateCnt = ()=>{
    setItemcnt(itemcnt + 1)
    
  }
  const onItemChnage = (event)=>{
    let cnt = parseInt( event.target.value);
    setItemcnt(cnt)
  }
  return (
    <>
        <div className='productContainer'>
          <div className='productBox'>
            <div className='price'>
                {props.product.desc}
                <span>₹{props.product.price}</span>
            </div>
            <div className='price'>
              <div>
                <label htmlFor="numbers">Amount</label>
                <input onChange={onItemChnage} type="number" name="numbers" className='numbers' value={itemcnt} />
              </div>
              
              <button onClick={updateCnt}>Add</button>
            </div>
          </div>
        </div>
    </>
    
    
  )
}

export default Items