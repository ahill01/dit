import React, { useEffect, useState } from "react"
import {useNavigate, useParams} from "react-router-dom"

function Chatbox({currentUser,currentConvo}) {
const [messages, setMessages]=useState([])
const [newMessage, setNewMessage]=useState("")
let me = currentConvo.sender === currentUser.name
function handleChange(e){
    setNewMessage(e.target.value)
}

useEffect(() => {
    fetch(`/conversations/${currentConvo.id}/messages`)
    .then(res => res.json())
    .then(msgs => setMessages(msgs))
  },[])

function handleSend(e){
    e.preventDefault()
    fetch(`conversations/${currentConvo.id}/messages`,{
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
   
    function messageClass(message){
      if(message.sender === currentUser.name){
        return "self"
      } else return "sender"
    }
    
  return (
    <div className="container-sm chatbox">
        <h1>{me ? currentConvo.recipient : currentConvo.sender}</h1>
       {messages.map(message => <p className={messageClass(message)}>{`${message.sender} said: ${message.body}`}</p>)}
       <form onSubmit={handleSend}>
        <input type="text" value={newMessage} onChange={handleChange}></input>
       <button type="submit">send</button>
        </form>
    </div>
  );
}

export default Chatbox;