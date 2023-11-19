import React, { useEffect, useState } from "react" 
import NavBarAdmin from "../component/navBarAdmin";
import axios from "axios";  
import UserCard from "../component/userCardAdmin";

function Messages(){

    const [users, setUsers] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8082/Users/")
        .then(res =>{
            setUsers(res.data)
        })
        .catch(err => console.log("Error message"))
    })

    return(
        <div>
            <NavBarAdmin/>
            <h2 style={{marginTop : "5rem"}}>
                Users accounts ( {users.length } users at all)
            </h2>
            <section className="messages">
                <div className="row content-row">
                    <div class="col s12 m12 content">
                        {
                            users.map((user) =>(
                                <UserCard key={user.id} user = {user}/>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Messages;