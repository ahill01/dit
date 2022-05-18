import React, { useEffect, useState } from "react"

function Inbox({currentUser}) {
const [conversations, setConversations]=useState([])
useEffect(() => {
    fetch(`/conversations/1`)
    .then(res => res.json())
    .then(res_conversations => setConversations(res_conversations))
},[])

  return (
    <div className="Inbox">

    </div>
  );
}

export default Inbox;