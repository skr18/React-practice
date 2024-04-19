import React, { useContext, useState } from 'react'
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import './NavBar.css'
import ItemsContext from './UseContext/items-context';

const NavBar = () => {
    const [itemCount,SetItemCount] = useState(0) ;
    const updateCount = () =>{
        SetItemCount(itemCount + 1);
    }
    const ctx = useContext(ItemsContext)
    console.log("sad ",ctx.items);
  return (
    <div className='navbar'>
        <div style={{fontSize:20, fontWeight:700, marginLeft:'100px'}}>
            SKR Mart
        </div>
        <div>
           <Badge color="secondary" badgeContent={ctx.items} style={{marginRight:50}}>
                <ShoppingCartIcon/>
           </Badge>
        </div>
    </div>
  )
}

export default NavBar