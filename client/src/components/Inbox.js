import React, { useEffect, useState } from "react"
import Chatbox from "./Chatbox"
function Inbox({currentUser}) {
const [conversations, setConversations]=useState([])

useEffect(() => {
    fetch(`/conversations/userindex/${currentUser.id}`)
    .then(res => res.json())
    .then(res_conversations => setConversations(res_conversations))
},[])

  return (
    <div className="Inbox">
        <h1>{`${currentUser.name}'s Inbox`}</h1>
        {conversations.map(conversation => <Chatbox id= {conversation.id} conversation={conversation} currentUser={currentUser}/>)}
        <div className="convo-box">
          <p>Chat goes here</p>
        </div>
    </div>
  );
}

export default Inbox;