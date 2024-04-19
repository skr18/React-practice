import React from 'react'
import "./Navbar.css"
import { useDispatch, useSelector } from 'react-redux'
import { uiAction } from './store/CartUI'
const Navbar = () => {
    const cnt=useSelector(state => state.cart.totalQuantity)
    const dispatch= useDispatch()
    const handleCartClick= ()=>{
        dispatch(uiAction.toogleDisplay())
    }
  return (
    <div className='navContainer'>
        <div>
            <h2>Redux Cart</h2>
        </div>
        <div className='cartBox' onClick={handleCartClick}>
            <div>
                My Cart
            </div>
            <div className='cartBadge'>
                {cnt}
            </div>
        </div>
    </div>
  )
}

export default Navbar