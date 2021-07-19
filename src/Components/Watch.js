import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';


const Watch = ({productDetails})=>{

return(
        <>
<div className="main1">
     {productDetails.map((item)=>(
        <Link to={`/Show/${item.id}`}>
               <div className="main2" key={item.id}>
                  
                       <img className="watch" src={item.thumb}/>
                  
                       <h4>{item.productName}</h4>
                       <p>${item.price}</p>

                  </div>
                  </Link>
      ) )}

</div>
  </>

)
}
export default Watch;