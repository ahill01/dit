import React, { useEffect, useState } from "react"
import Chatbox from "./Chatbox"
import ChatSummary from "./ChatSummary"
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
        {conversations.map(conversation => <ChatSummary id= {conversation.id} conversation={conversation} currentUser={currentUser}/>)}
    </div>
  );
}

export default Inbox;