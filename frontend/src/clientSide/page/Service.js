import React from "react"  
import NavBar from "../component/navBarClient";
import { Link } from "react-router-dom";
import Footer from "../component/footer";

function Service(){
    return(
        <div>
            <NavBar/>
            <section>
                <div className="row" style={{padding : "10rem 0 0", minHeight : "48vh", backgroundColor : "lightslategray"}}>
                    <div className="col s12 m12 l12">
                        <div className="content">
                            <h5 className="title">DO YOU NEED GRAPHIC DESIGN?</h5>
                            <p style={{fontSize : "1.5rem"}}><Link to="/Home">home</Link>/Services</p>
                        </div>
                    </div>
                </div>
             </section>
             <section className="services" style={{minHeight : "90vh", padding : "7rem"}}>
                <h4>Don't hesitate to contact us for your : </h4>
                <div className="box-container" style={{padding : "2rem 0 0 0"}}>
                    <div className="box">
                        <p style={{ display : "flex", alignItems: "center", justifyContent: "center", textAlign : "left", fontSize : "1.5rem"}}><i className="material-icons" style={{ color: "#8e44ad", marginRight: "10px", fontSize : "2.5rem" }}>chevron_right</i> Logo</p>
                        <p style={{ display : "flex", alignItems: "center", justifyContent: "center", textAlign : "left", fontSize : "1.5rem"}}><i className="material-icons" style={{ color: "#8e44ad", marginRight: "10px", fontSize : "2.5rem" }}>chevron_right</i> Flyers</p>
                        <p style={{ display : "flex", alignItems: "center", justifyContent: "center", textAlign : "left", fontSize : "1.5rem"}}><i className="material-icons" style={{ color: "#8e44ad", marginRight: "10px", fontSize : "2.5rem" }}>chevron_right</i> Posters</p>
                        <p style={{ display : "flex", alignItems: "center", justifyContent: "center", textAlign : "left", fontSize : "1.5rem"}}><i className="material-icons" style={{ color: "#8e44ad", marginRight: "10px", fontSize : "2.5rem" }}>chevron_right</i> Business</p>                      
                    </div>
                    <div className="box">
                    <p style={{ display : "flex", alignItems: "center", justifyContent: "center", textAlign : "left", fontSize : "1.5rem"}}><i className="material-icons" style={{ color: "#8e44ad", marginRight: "10px", fontSize : "2.5rem" }}>chevron_right</i> Labels</p>
                        <p style={{ display : "flex", alignItems: "center", justifyContent: "center", textAlign : "left", fontSize : "1.5rem"}}><i className="material-icons" style={{ color: "#8e44ad", marginRight: "10px", fontSize : "2.5rem" }}>chevron_right</i> Stikers</p>
                        <p style={{ display : "flex", alignItems: "center", justifyContent: "center", textAlign : "left", fontSize : "1.5rem"}}><i className="material-icons" style={{ color: "#8e44ad", marginRight: "10px", fontSize : "2.5rem" }}>chevron_right</i> Banners</p>
                        <p style={{ display : "flex", alignItems: "center", justifyContent: "center", textAlign : "left", fontSize : "1.5rem"}}><i className="material-icons" style={{ color: "#8e44ad", marginRight: "10px", fontSize : "2.5rem" }}>chevron_right</i> Invitation Cards</p>                      
                    </div>
                </div>
                <p style={{fontSize : "2rem", padding : "3rem 0 0 0"}}>We create high-quality posters for you at very affordables prices</p>
             </section>
             <Footer/>
        </div>
    )
}

export default Service;