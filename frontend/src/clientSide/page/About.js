import React from "react"  
import NavBar from "../component/navBarClient";
import {Link} from 'react-router-dom'
import Footer from "../component/footer";

function About(){
    return(
        <div>
            <NavBar/>
            <section>
                <div className="row" style={{padding : "8rem 0 0", minHeight : "48vh", backgroundColor : "lightslategray"}}>
                    <div className="col s12 m12 l12">
                        <div className="content">
                            <h4 className="title">ABOUT US</h4>
                            <p style={{fontSize : "1.5rem"}}><Link to="/AdminHome">home</Link>/about</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className = "about" style={{minHeight : "60vh", padding : "4rem 2rem 0 2rem"}}>
                <div className = "flex">
                    <div className="image">
                        <img/>
                    </div>
                    <div className="content">
                        <h5 className="title" style={{marginBottom : "4rem"}}>WHY CHOOSE US?</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                             Eveniet voluptatibus aut hic molestias, reiciendis natus 
                             fuga, cumque excepturi veniam ratione iure. Excepturi fugiat 
                             placeat iusto facere id officia assumenda temporibus?
                             Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                             Impedit quos enim minima ipsa dicta officia corporis ratione saepe 
                             sed adipisci?
                        </p>
                        <Link className="btn btn-success" to="/Contact" style={{marginTop : "2rem"}}>Contact Us</Link>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default About;