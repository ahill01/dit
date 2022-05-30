import React, {useState, useEffect} from "react"
import {useNavigate, useParams} from "react-router-dom"

function ChatSummary({currentUser,conversation,setCurrentConvo}){
let navigate= useNavigate();
let me = conversation.sender === currentUser.name

function renderChatbox(){
    setCurrentConvo(conversation)
    navigate(`/inbox/${conversation.id}`)
}

    return(
        <div className="chatsummary" onClick={renderChatbox}>
        <h2>{me ? conversation.recipient : conversation.sender}</h2> <p>{me ? `${conversation.last_message.sender} said: ${conversation.last_message.body}`:`you said: ${conversation.last_message.body}`}</p>
        </div>
    )
}

export default ChatSummary