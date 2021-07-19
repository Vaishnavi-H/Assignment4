import { useContext, useState,useEffect } from "react";
import "./Cart.css";
import CartContext from "./Context/cart/CartContext";
import {Link,Router,Route} from "react-router-dom";
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import CartItem from "./CartItem";
import { ArrowBack } from '@material-ui/icons';
const Cart = () => {
//const { cartItems } = useContext(CartContext);
const [cart,setCart]=useContext(CartContext);
//const[total,setTotal]=useState(0);


// useEffect(()=>{
//   const getTotal =()=>{
//       const res= cart.reduce((prev,item)=>{
        
//           return prev + (item.price * item.count)
//       },0)
//       setTotal(res)
//   }
//   getTotal()
// },[])

const totalprice =cart.reduce(( acc,curr)=>  acc +curr.price*curr.count ,0);
const total=cart.reduce((acc,curr)=>acc  + curr.count,0 );



return(
    <>
       {/* <div className="main3">
          
       <Link  to='/Header'><ArrowBack className="icon6"/></Link>
     </div> */}
     <h3 style={{textAlign:"center"}}>My Cart</h3>
      <div>
       <div>
          {cart.length === 0 ? (
           null
          ) : (
            <div>
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
               
              ))}
               
            </div>
          )}
          
        </div>
       
        <div className="total" style={{marginTop:"70px"}}>
        <h3 style={{display: "flex",width: "100%",alignItems: "center"}}>{total}-Items</h3> <br></br>
        <h3> <span style={{ color:"rgb(219, 146, 11)"}}>${totalprice}</span> </h3>
       
        </div>
        <Link style={{color:"white"}} to='/Header'> <footer> <h5>proceed to Checkout--></h5></footer></Link>
      </div>
  
  </>
);
};
  export default Cart;