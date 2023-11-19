import React from "react"; 
import { Link } from "react-router-dom"; 
import NavBar from "../component/navBarClient";
import Footer from "../component/footer";

function Contact(){
    return (

        <div>
            <NavBar/>
             <section>
                <div className="row" style={{padding : "8rem 0 0", minHeight : "48vh", backgroundColor : "lightslategray"}}>
                    <div className="col s12 m12 l12">
                        <div className="content">
                            <h4 className="title">CONTACT US</h4>
                            <p style={{fontSize : "1.5rem"}}><Link to="/AdminHome">home</Link>/contact</p>
                        </div>
                    </div>
                </div>
             </section>
             <section>
                <div className="row">
                    <div className="col s12 m6 offset-m3">
                        <div className="card hoverable">
                            <div className="card-stacked">
                                <div className="card-content">
                                    <h6 className="title" style={{marginBottom : "2.5rem"}}>SAY SOMETHING</h6>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="enter your name" style={{
                                            border: "1px solid gray",
                                            borderRadius: "10px",
                                            padding: "0 15px ",
                                            }}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="enter your email" style={{
                                            border: "1px solid gray",
                                            borderRadius: "10px",
                                            padding: "0 15px ",
                                            }}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="number" className="form-control" placeholder="enter your number" style={{
                                            border: "1px solid gray",
                                            borderRadius: "10px",
                                            padding: "0 15px ",
                                            }}/>
                                    </div>
                                    <div className="form-group">
                                        <textarea name="message" className="form-control" placeholder="enter your message" id="" cols="30" rows="10" style={{height : "8rem"}}></textarea>
                                    </div>
                                    <div className="card-action">
                                            <Link to="" className="btn btn-success">Send Message</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </section>
             <Footer/>
        </div>
        
    )
}

export default Contact