import React from "react";    
import { Link } from "react-router-dom";
 
function CardProduct(props){
    const {product} = props; 

  

    return(  
      <div className="card hoverable" style={{width : "30rem", height : "40rem", cursor : "pointer"}}>
        <Link to={`/ImageContact/${product.id}`} ><img src={`http://localhost:8082/images/`+ product.image} alt={product.name} /></Link>
      </div>  
    )
}
export default CardProduct;