import React, { useEffect, useState } from "react"
import ChatSummary from "./ChatSummary"

function Inbox({currentUser,setCurrentConvo}) {
const [conversations, setConversations]=useState([])

useEffect(() => {
    fetch(`/conversations/userindex/${currentUser.id}`)
    .then(res => res.json())
    .then(res_conversations => setConversations(res_conversations))
},[])

if(currentUser.name===undefined) {
  return <h1><em>**log in to view your messges**</em></h1>
} else return (
    <div className="Inbox">
        <h1>{`${currentUser.name}'s Inbox`}</h1>
        {conversations.map(conversation => <ChatSummary id= {conversation.id} conversation={conversation} currentUser={currentUser} setCurrentConvo={setCurrentConvo}/>)}
    </div>
  );
}

export default Inbox;