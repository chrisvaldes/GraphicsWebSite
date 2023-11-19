import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"; 
import axios from "axios"; 
import NavBar from "../component/navBarClient";
import CardProduct from "../component/cardProduct";
import Footer from "../component/footer";

function DiscoverMore(){

    const [products, setProduct] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8082/AddProduct/")
        .then(res =>{
            setProduct(res.data)
        })
        .catch(err => console.log(err))
    })

    return(
         <div>
            <NavBar/>
            <section className="home" >
                <div className="content">
                    <h4>SEE MORE ELEMENTS? </h4>
                </div>
            </section>
            <section className="Products">
                <h4 className="product-title">lastest products</h4>
                <div className="box-products">
                    {
                        products.map(product => (
                            <CardProduct key={product.id} product = {product}/>
                        ))
                    }
                </div>
                {/* <CardProduct products = {products}/> */}
            </section>
            <section className="contact">
                <div className="row">
                    <div className="col s12 m12 l12">
                        <h4 className="title">HAVE ANY QUESTIONS ?</h4>
                        <p className="para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque cumque exercitationem repellendus, amet ullam voluptatibus?</p>
                        <Link to="/Contact" className="btn btn-update">Contact Us</Link>
                    </div>
                </div>
            </section>
            <Footer/>
         </div>
    )
}

export default DiscoverMore;