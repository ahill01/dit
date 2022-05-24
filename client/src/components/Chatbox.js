import React, { useEffect, useState } from "react"
import {useNavigate, useParams} from "react-router-dom"

function Chatbox({currentUser}) {

let {conversationId} = useParams()
const[conversation, setConversation]=useState({})
const [messages, setMessages]=useState(conversation.messages)
const [newMessage, setNewMessage]=useState("")

function handleChange(e){
    setNewMessage(e.target.value)
}

let navigate= useNavigate();
let {userId} = useParams()

function handleSend(e){
    e.preventDefault()
    fetch('/messages',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
        body:newMessage,
        user_id:currentUser.id,
        conversation_id:conversation.id})
    })
    .then(res => res.json())
    .then(newMessage => {
        setMessages([...messages,newMessage])
        setNewMessage("")
        })
        e.target.reset();
    }
   

  return (
    <div className="Inbox">
        <h1>{conversation.sender === currentUser.name ? conversation.recipient : conversation.sender}</h1>
       {messages.map(message => <p>{`${message.sender} said: ${message.body}`}</p>)}
       <form onSubmit={handleSend}>
        <input type="text" value={newMessage} onChange={handleChange}></input>
       <button type="submit">send</button>
        </form>
    </div>
  );
}

export default Chatbox;