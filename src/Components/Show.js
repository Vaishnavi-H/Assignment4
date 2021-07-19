import React,{useState} from 'react';
import { ArrowBack,LocalMall } from '@material-ui/icons';
import './header.css';
import {useParams} from "react-router-dom"; 
import {Link,Router,Route} from "react-router-dom";
import CartContext from './Context/cart/CartContext';
import { useContext } from "react";
import ViewMap from './ViewMap';





const Show=({productDetails})=>{
  //const { cartItems } = useContext(CartContext);
  const[cart,setCart]=useContext(CartContext);
  const total=cart.reduce((acc,curr)=>acc  + curr.count,0 );
  
    const {id}= useParams();
    const [data]=useState(productDetails);

   
    
    const filterData=data.filter((item )=>{
       
        if(item.id === id){
           
        return item;
        }
       
        })
        .map((item)=>(
         <ViewMap key={item.id} item={item}/>
        ))
  
      
    
    return(
       
       
       <div className="main">
         <div className="header">
           <div className="header2">
           
           <Link  to='/Header'><ArrowBack className="icon1"/></Link>
           
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
        {filterData}
       
      </div>
     
       
      
      
      
    );
}
export default Show;