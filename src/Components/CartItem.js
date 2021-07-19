import React, { useEffect ,useState} from 'react';

import './Cart.css';
import { useContext } from "react";
import CartContext from "./Context/cart/CartContext";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';


   
        const CartItem=({item})=>{
         // const { removeItem } = useContext(CartContext);
         const [cart,setCart]=useContext(CartContext);
         
         
        
        const removeItem= id => {
            
            cart.forEach((item, index) => {
               
                if(item.id === id) {
                    cart.splice(index,1)
                }
            })
            setCart([...cart])
            }

            // removeItem(id){
            //     var delete= cart.indexOf(id)
            //     var tobe=cart.splice(delete,1)
            //     setCart(cart)
            // }

              const reduction =id =>{
                
                  
              cart.forEach(item =>{
                    if(item.id === id){
                        item.count === 1 ? item.count = 1 :item.count -= 1;
                    }
                })
                setCart([...cart])
              }
              
              const increase = id =>{
                
                  
                cart.forEach(item =>{
                    if(item.id === id){
                        item.count += 1;
                    }
                })
                setCart([...cart])
              } 
           
          
       
    return(
        <>
        <div className="chart1">
        
       
        <div key={item.id} className="cart1">
        
             <img className="cart2" src={item.thumb} alt=''/>
             <div className="cart3">
              <h3>{item.productName}</h3>
              <DeleteOutlineIcon  onClick={() => removeItem(item.id)}/>
            
              <div className="cart4">
              <p style={{color:"#ee7032"}}>${item.price*item.count}</p>
              </div>
            
              <div className="cart5">
              <button onClick={()=>reduction(item.id)}>-</button>&nbsp;
              <span>{item.count}</span> &nbsp;
               <button onClick={()=>increase(item.id)}>+</button>&nbsp;
              
               </div>
               </div>
             </div>
            
   
             
      </div>
      </>
    );
    
}

export default CartItem;