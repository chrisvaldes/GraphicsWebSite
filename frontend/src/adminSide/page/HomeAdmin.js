import React from "react" 
import "../style/homeAdmin.css";  
// import axios from "axios"; 
import NavBarAdmin from "../component/navBarAdmin"; 

function AdminHome(){

    // useEffect(()=>{
    //     axios.get("http://localhost:8082/AddProduct/")
    //     .then(res =>{
    //         setProduct(res.data)
    //     })
    //     .catch(err => console.log(err))
    // })

    return(
         <div>
            <NavBarAdmin/>
            <section className="home" >
                <div className="content">
                    <h4>WELCOME TO OUR DESIGN PLATFORM</h4>

                    <p style={{fontFamily : "Brush Script MT', cursive"}}>Don't believe in art believe in artist</p>
                    {/* <p><Link to="/DiscoverMore" className="btn btn-primary">Dicover More</Link></p>   */}
                </div>
            </section>
         </div>
    )
}

export default AdminHome;