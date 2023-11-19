import React from "react";

export default function CardMessage(props){
    const {messages} = props
    return(
        <div className="card-panel">
            <div className="card-content left-align">
                <p>user id : <span class="purple-text">{messages.user_id}</span></p>
                <p>name : <span class="purple-text">{messages.name}</span></p>
                <p>number : <span class="purple-text">{messages.number}</span></p>
                <p>email : <span class="purple-text">{messages.email}</span></p>
                <p>message : <span class="purple-text">{messages.message}</span></p>
            </div>
        </div>
    )
}