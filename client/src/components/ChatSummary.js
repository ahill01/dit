import React, {useState, useEffect} from "react"
import {useNavigate, useParams} from "react-router-dom"

function ChatSummary({currentUser,conversation,setCurrentConvo}){
let navigate= useNavigate();

function renderChatbox(){
    setCurrentConvo(conversation)
    navigate(`/inbox/${conversation.id}`)
}

    return(
        <div className="chatsummary" onClick={renderChatbox}>
        <h2>{conversation.sender === currentUser.name ? conversation.recipient : conversation.sender}</h2> <p>{conversation.last_message}</p>
        </div>
    )
}

export default ChatSummary