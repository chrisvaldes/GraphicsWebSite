import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../style/registerPageAdmin.css"

function RegisterPage(){

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userType, setUserType] = useState("");
    const [userConfirmPassword, setUserConfirmPassword] = useState("");

    function handleRegister(){
        axios.post("http://localhost:8082/RegisterPage", {userName, userEmail, userPassword, userType})
        .then(res =>{
            console.log(res.data);
        })
        .catch(err => console.log(err))
    }

    return (

        <div className="container" >
            <div className="row" >
                <div className="col s12 m8 offset-m2">
                    <div className="card hoverable" style={{padding : "0 2rem"}}>
                        <div className="card-title" >
                            <h4 style={{padding : "25px 0"}}>Registration</h4>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name" ><i class="material-icons" style={{color : 'white'}}>person</i></label>
                            <input type="text" onChange={(e) => setUserName(e.target.value)} placeholder="user Name" className="form-control" id="name" style={{padding : "0 7px"}}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" ><i class="material-icons" style={{color : 'white'}}>message</i></label>
                            <input type="email" onChange={(e)=>setUserEmail(e.target.value)} placeholder="Email" className="form-control" id="email" style={{padding : "0 7px"}}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" ><i class="material-icons" style={{color : 'white'}}>lock</i></label>
                            <input type="password" onChange={(e) => setUserPassword(e.target.value)} placeholder="Enter your password" className="form-control" id="email" style={{padding : "0 7px"}}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" ><i class="material-icons" style={{color : 'white'}}>lock</i></label>
                            <input type="password" onChange={(e) => setUserConfirmPassword(e.target.value)} placeholder="Confirm your password" className="form-control" id="email" style={{padding : "0 7px"}}/>
                        </div>
                         

                        <div className='card-text'>
                            <p style={{margin : "2rem 0"}}>Don't have and account? <Link to='/'>Register now</Link></p>
                        </div>
                        <div className='card-action'>
                            <button className='btn btn-primary' onClick={handleRegister} style={{marginBottom : "10px"}}>Register Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;