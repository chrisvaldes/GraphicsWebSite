import React, {useState } from 'react'
import "../style/updateProductAdmin.css";
import {Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateProduct(){
     
    const [productName, setProductName] = useState("")
    const [productPrice, setProductPrice] = useState("")
    const [fileProduct, setFileProduct] = useState("")
    const [product, setProduct] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()
    
    function handleUpdate(event){
        event.preventDefault();

        const formData = new FormData();
        formData.append("productName", productName)
        formData.append("productPrice", productPrice)
        formData.append("image", fileProduct)

        axios.put('http://localhost:8082/AddProduct/'+id, formData)
        .then(res =>{  
            setProduct(res.data)
            navigate("/AddProduct")

        })
        .catch(err => console.log(err))
    }

    return( 
        <div className="row edit-product-form">
            <div className="col s12 m8 offset-m2">
              <div className="card hoverable" style={{ padding: "2rem" }}>
                <h5 className="title">UPDATE PRODUCTS</h5>
                <div className="card-stacked">
                  <div className="card-content">
                    <div className="form-group">
                      <input
                        type="text"
                        value={product.name}
                        placeholder="Enter product name"
                        className="form-control s12 text-input "
                        style={{
                          border: "1px solid gray",
                          borderRadius: "10px",
                          padding: "0 15px ",
                        }}
                        onChange={(e) => setProductName(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="number"
                        value={product.price}
                        placeholder="Enter product price"
                        className="form-control text-input"
                        min="1"
                        style={{
                          border: "1px solid gray",
                          borderRadius: "10px",
                          padding: "0 15px",
                        }}
                        onChange={(e) => setProductPrice(e.target.value)}
                      />
                    </div>
                    <div
                      className="form-group"
                      style={{
                        border: "solid black 1px",
                        padding: "10px",
                        borderRadius: "5px",
                        borderColor: "gray",
                      }}
                    >
                      <input
                        type="file"
                        className="form-control "
                        value={product.image}
                        onChange={(e) => setFileProduct(e.target.files[0])}
                      />
                    </div>
                    <div className="card-action">
                      <button
                        className="btn btn-update"
                        onClick={handleUpdate}
                      >
                        update
                      </button>
                      <Link
                        className="btn btn-danger"
                        to="/AddProduct"
                      >
                        Cancel
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );

}

export default UpdateProduct;