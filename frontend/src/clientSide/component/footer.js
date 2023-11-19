import React from "react"
import { Link } from "react-router-dom"
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

function Footer(){
    return( 

      <section className="services" style={{padding : "3rem 0 0 0"}}> 
                <div className="box-container">
                    <div className="box">
                      <h6 className="title"  >QUICK LINKS</h6>
                      <p style={{ display : "flex", alignItems: "center", justifyContent: "center", textAlign : "left", fontSize : "1.5rem"}}><Link to="/AdminHome" >Home</Link></p>
                      <p style={{ display : "flex", alignItems: "center", justifyContent: "center", textAlign : "left", fontSize : "1.5rem"}}><Link to="/About">About</Link></p>
                    </div>
                    <div className="box">
                        <h6 className="title" >EXTRA LINKS</h6>
                        <p style={{ display : "flex", alignItems: "center", justifyContent: "center", textAlign : "left", fontSize : "1.5rem"}}><Link to="/AdminHome" style={{textAlign : "left"}}>Login</Link></p> 
                        <p style={{ display : "flex", alignItems: "center", justifyContent: "center", textAlign : "left", fontSize : "1.5rem"}}><Link to="/AddProduct" style={{textAlign : "left"}}>Register</Link></p>
                    </div>
                    <div className="box">
                        <h6 className="title">FOLLOW US</h6>
                        <p style={{ display: "flex", alignItems: "center", justifyContent: "center", textAlign: "left", fontSize: "1.5rem" }}>
                          <Link to="/AdminHome" style={{ display: "flex", alignItems: "center", justifyContent: "center", textAlign: "left" }}>
                            <FaFacebook style={{ color: "#8e44ad", marginRight: "10px" }} />
                            Facebook
                          </Link>
                        </p>
                        <p style={{ display: "flex", alignItems: "center", justifyContent: "center", textAlign: "left", fontSize: "1.5rem" }}>
                          
                        <Link to="/Users" style={{ display: "flex", alignItems: "center", justifyContent: "center", textAlign: "left" }}>
                            <FaLinkedin style={{ color: "#8e44ad", marginRight: "10px" }} />
                            LinkedIn
                          </Link> 
                        </p>
                    </div>
                    <div className="box">
                        <h6 className="title">CONTACT INFO</h6>
                        <p style={{ display : "flex", alignItems: "center", justifyContent: "center", textAlign : "left", fontSize : "1.5rem"}}><i className="material-icons" style={{ color: "#8e44ad", marginRight: "10px" }}>phone_in_talk</i> +237 656 273 562</p>
                        <p style={{ display : "flex", alignItems: "center", justifyContent: "center", textAlign : "left", fontSize : "1.2rem"}}><i className="material-icons" style={{ color: "#8e44ad", marginRight: "20px" }}>message </i> arianemafo@gmail.com</p> 
                    </div>
                </div>
      </section>
    
    )
}

export default Footer