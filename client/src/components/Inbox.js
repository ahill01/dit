import React, { useEffect, useState } from "react"
import Chatbox from "./Chatbox"
function Inbox({currentUser}) {
const [conversations, setConversations]=useState([])

useEffect(() => {
    console.log("fetching")
    fetch(`/conversations/userindex/1`)
    .then(res => res.json())
    .then(res_conversations => setConversations(res_conversations))
},[currentUser])

  return (
    <div className="Inbox">
        <h1>{`${currentUser.name}'s Inbox`}</h1>
        {conversations.map(conversation => <Chatbox id= {conversation.id} conversation={conversation} currentUser={currentUser}/>)}
    </div>
  );
}

export default Inbox;