import React, { useState } from 'react';
import './header.css';
import {Link} from 'react-router-dom';




const Content= ({productCard})=>{

return(
        <>
<div className="main1">
     {productCard.map((item)=>(
       <Link to={`/View/${item.id}`}>
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
export default Content;