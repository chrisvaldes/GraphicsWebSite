import React from "react";
import { Link } from "react-router-dom";   
 
 
 
function AddProductList(props){
    const {product} = props; 
    return(  
          <div className="card hoverable">
             
            <img src={`http://localhost:8082/images/`+product.image} alt={product.name}  style={{height : "18rem", width : "14rem",  marginTop : "15px", borderRadius : "10px", cursor : "pointer"}}/>
            
            <div className="card-stacked" >
              <div className="card-content">
                 
                <div style={{marginTop : "25px"}}> 
                    <Link to="/" className="btn btn-update" style={{marginRight : "2px"}}>
                    Update
                    </Link>
                    <Link to="/" className="btn btn-danger" style={{marginLeft : "2px"}}>
                    Delete
                    </Link>
                </div>
                
              </div>
            </div>
          </div>  
    )
}
export default AddProductList;