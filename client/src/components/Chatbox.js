import React, { useEffect, useState } from "react"
import {useNavigate, useParams} from "react-router-dom"

function Chatbox({currentUser,currentConvo}) {
const [messages, setMessages]=useState([])
const [newMessage, setNewMessage]=useState("")

function handleChange(e){
    setNewMessage(e.target.value)
}

let {currentConvoId} = useParams()

useEffect(() => {
    fetch(`/conversations/${currentConvoId}/messages`)
    .then(res => res.json())
    .then(msgs => setMessages(msgs))
  },[])

function handleSend(e){
    e.preventDefault()
    fetch('/messages',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
        body:newMessage,
        user_id:currentUser.id,
        conversation_id:currentConvo.id})
    })
    .then(res => res.json())
    .then(newMessage => {
        setMessages([...messages,newMessage])
        setNewMessage("")
        })
        e.target.reset();
    }
   

  return (
    <div className="chatbox">
        <h1>{currentConvo.sender === currentUser.name ? currentConvo.recipient : currentConvo.sender}</h1>
       {messages.map(message => <p>{`${message.sender} said: ${message.body}`}</p>)}
       <form onSubmit={handleSend}>
        <input type="text" value={newMessage} onChange={handleChange}></input>
       <button type="submit">send</button>
        </form>
    </div>
  );
}

export default Chatbox;