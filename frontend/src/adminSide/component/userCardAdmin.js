import React from "react";

export default function UserCard(props){
    const {user} = props
    return(
        <div className="card-panel">
            <div className="card-content left-align">
                <p>user id : <span class="purple-text">{user.id}</span></p>
                <p>username : <span class="purple-text">{user.name}</span></p>
                <p>email : <span class="purple-text">{user.email}</span></p>
                <p>user type : <span class="purple-text">{user.user_type}</span></p>
            </div>
        </div>
    )
}