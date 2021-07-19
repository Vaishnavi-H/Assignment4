import React from 'react';
import './header.css';
import Content from './Content';
import { Tune, LocalMall } from '@material-ui/icons';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';
import Home from './Home';
import Watch from './Watch'; 
import CartContext from './Context/cart/CartContext';
import { useContext } from "react";


const Header3=({productDetails})=> {
 // const { cartItems} = useContext(CartContext);
 const[cart,setCart]=useContext(CartContext);
 const total=cart.reduce((acc,curr)=>acc  + curr.count,0 );
 

    return (
        <div className="main">
         <div className="header">
           <div className="header2">
            <div className="icon1">&nbsp;&nbsp;<FormatAlignLeftIcon /></div>
                 <div className="header3">
                 {/* {cart.length > 0 && (
            <div className='count1'>
              <span>{total}</span>
            </div>
          )} */}
                   
                   <Link  className="icon1" to='/Cart'><i style={{fontSize:"30px"}} class="fa fa-shopping-cart" aria-hidden="true"><div className="design">{total}</div></i></Link>
          
                 </div>
                 
                
            </div>
            
        </div>
        <h2 className="heading">Discover our exclusive<br></br> watches</h2>
        <div className="navbar">
        
       
       
        <ul>
           
            <Link style={{color:"white"}} to='/Header' >
            <li>Trending</li>
            </Link>
            
            <Link style={{color:"white"}} to='/Header3' exact>
              <li>Popular</li> 
            </Link>
           
            <Link style={{color:"white"}} to='/Header2'>
            <li>We Recommend</li>
            </Link>
           
           </ul>
         
           
          
             
            
           
        
        </div>
      
        <Watch productDetails={productDetails} />
        
        </div>
    )
}

export default Header3;