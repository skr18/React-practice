import React from 'react'
import { useDispatch } from 'react-redux';
import { cartAction } from './store/items';
import "./CartItems.css"

const CartItems = (props) => {
    const {quantity,title,totalPrice,price,id} = props
    const dispatch = useDispatch();
    const handleAddItem = ()=>{
        dispatch(cartAction.addItem({
            id,
            title,
            price
          }))
    }
    const handleRemoveItem = ()=>{
        dispatch(cartAction.removeItem(id))
    }
  return (
    <div className='cartBlock'>
        <div className='cartTitleBlock'>
            <div>{title}</div>
            <div><b>₹{totalPrice}</b> (₹{price}/item)</div>
        </div>
        <div className='cartActionBlock'>
            <div>x{quantity}</div>
            <div>
                <button onClick={handleRemoveItem}>-</button>
                <button onClick={handleAddItem}>+</button>
            </div>
        </div>
    </div>
  )
}

export default CartItems