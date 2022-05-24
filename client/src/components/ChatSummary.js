import React, {useState, useEffect} from "react"
import {useNavigate, useParams} from "react-router-dom"

function ChatSummary({currentUser,conversation}){
let navigate= useNavigate();

// useEffect(() => {
//     fetch(`/users/${userId}`)
//     .then(res => res.json())
//     .then(showUser => {
//         setUser(showUser)
//         setInstruments(showUser.instruments)})
//     },[])
    return(
        <div>
        <h1>{conversation.sender}</h1>
       
        </div>
    )
}

export default ChatSummary