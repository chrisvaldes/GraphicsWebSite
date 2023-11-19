import axios from "axios";
import React, { useEffect, useState } from "react";
import "../style/addProductAdmin.css"; 
import {Link} from "react-router-dom"; 
import NavBarAdmin from "../component/navBarAdmin";
// import UpdateProduct from "../components/UpdateProducs";

function AddProducts() {
  const [products, setProduct] = useState([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [file, setFile] = useState("");
 
 
  useEffect(() => {
    axios
      .get("http://localhost:8082/AddProduct/")
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("productName", productName);
    formData.append("productPrice", productPrice);

    axios
      .post("http://localhost:8082/AddProduct", formData)
      .then((res) => {
        if (res.data.Status === "Success") {
          console.log("Succeeded"); 
        } else {
          console.log("Failed");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = async (id) => {
    try {
      console.log("id : ", id);
      await axios.delete('http://localhost:8082/addProducts/' + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }
 

  return (
    <>
      <NavBarAdmin />
      <section>
        <div className="container">
          <h4 className="title">SHOP PRODUCTS</h4>
          <br />
          <br />
          <div className="row">
            <div className="col s12 m8 offset-m2">
              <div className="card hoverable" style={{ padding: "1rem" }}>
                <h5 className="title">ADD PRODUCTS</h5>
                <div className="card-stacked">
                  <div className="card-content">
                    <div className="form-group">
                      <input
                        type="text"
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
                        onChange={(e) => setFile(e.target.files[0])}
                      />
                    </div>
                    <div className="card-action">
                      <button
                        className="btn btn-primary"
                        onClick={handleUpload}
                      >
                        Add Product
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        {products && (
          <section className="show-products">
            <div className="box-container">
              {products.map((product) => (
            
                  <div className="card hoverable" key={product.id}>
             
                    <img src={`http://localhost:8082/images/`+product.image} alt={product.name}  style={{height : "30rem", width : "18rem",  marginTop : "15px", borderRadius : "10px", cursor : "pointer"}}/>
                    
                    <div className="card-stacked">
                      <div className="card-content">
                         
                        <div style={{marginTop : "25px"}}> 
                            <Link to={`/AddProduct/${product.id}`} className="btn btn-update" style={{marginRight : "2px"}}>
                            Update
                            </Link>
                            <button onClick={e => handleDelete(product.id)} className="btn btn-danger" style={{marginRight : "2px"}}>
                            Delete
                            </button>
                        </div>
               </div>
             </div>
           </div>   
              ))}
            </div>
          </section>
        )
      }
      </section>  
    </>
  );
}

export default AddProducts;

 