import React, { useEffect, useState } from "react" 
import NavBarAdmin from "../component/navBarAdmin";
import axios from "axios";
import CardMessage from "../component/messageCardAdmin";
import "../style/MessageAdmin.css"

function Messages(){

    const [messages, setMessage] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8082/Messages/")
        .then(res =>{
            setMessage(res.data)
        })
        .catch(err => console.log("Error message"))
    })

    return(
        <div>
            <NavBarAdmin/>
            <h2 style={{marginTop : "5rem"}}>
                Messages
            </h2>
            <section className="messages">
                <div className="row content-row">
                    <div class="col s12 m12 content">
                        {
                            messages.map((message) =>(
                                <CardMessage key={message.user_id} messages = {message}/>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Messages;