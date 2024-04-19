import React from 'react'
import "./Card.css"
import { useDispatch } from 'react-redux';
import { cartAction } from './store/items';
const Card = (props) => {
    const dispatch = useDispatch();
    const {title,price,description,id} = props;

    const addItemHandler = ()=>{
        dispatch(cartAction.addItem({
          id,
          title,
          price
        }))
    }
  return (
    <div className='cardConatiner'>
        <div className='titleBlock'>
            <div><b>{title}</b></div>
            <div>₹{price}</div>
        </div>
        <div className='descriptionBlock'>
            <span>{description}</span>
        </div>
        <button className='addToCartButton' onClick={addItemHandler}>Add To Cart</button>
    </div>
  )
}

export default Card