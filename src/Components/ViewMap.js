import { useContext } from "react";
import CartContext from './Context/cart/CartContext';
import './header.css';
import {TransformWrapper, TransformComponent} from "react-zoom-pan-pinch";
const ViewMap = ({ item }) => {
    //const { addToCart } = useContext(CartContext);
    const[cart,setCart]=useContext(CartContext);
    const addToCart=(item)=>{
      const watch={thumb:item.thumb,
                  productName:item.productName,
                  price:item.price,
                  count:item.count,
                  id:item.id};
      setCart(cur=>[...cur,watch]);
    }
return(  
<div className="center">
             <div className="center2">
           <TransformWrapper>
           < TransformComponent>  
            <img className="watch2" src={item.thumb}/>
            </ TransformComponent>
            </TransformWrapper>
               <div className="desc">
                    <p className="name">{item.productName}</p>
                    <p className="description">{item.description}</p>
                     
          
                </div>
           <button  onClick={() => addToCart(item)} className="addtocart">Add to Cart-</button><span className="price">${item.price}</span>
         </div>
        </div>
);
}
export default ViewMap;        