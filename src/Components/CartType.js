import React from 'react';
import CartContext from "./Context/cart/CartContext";
import { useState } from "react";



 const CartType= (props)=>{
  const[cart, setCart]=useState([]);
  return(
    <CartContext.Provider value={[cart,setCart]}>
      {props.children}
    </CartContext.Provider>
  )
}
export default CartType;