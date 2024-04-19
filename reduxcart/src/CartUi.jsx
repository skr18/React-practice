import React from 'react'
import { useSelector } from 'react-redux'
import CartItems from './CartItems'
import "./CartUi.css"
const CartUi = () => {
    const items = useSelector(state => state.cart.items)
    const toalCartPrice = useSelector(state=> state.cart.toalCartPrice)
  return (
    <div className='cartUiContainer'>
        <div style={{display:"flex",justifyContent:"space-between"}}>
            <h2 >Your Shopping Cart</h2>
            <h3>TotalPrice - {toalCartPrice} </h3>
        </div>
        {
            items.map((item)=>{
                return(
                    <CartItems key={item.id} quantity={item.quantity} price={item.price} 
                               title={item.title} totalPrice={item.totalPrice} id={item.id} />
                )
            })
        }
    </div>
  )
}

export default CartUi