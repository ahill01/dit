import React from "react"
import ProfileCard from "./ProfileCard"
import SummaryCard from "./SummaryCard"
function CommunityBoard({allUsers,currentUser,createCollab}){

    function createCollabReq(requesterId,recieverId){
        console.log("making collab")
            fetch(`/users/${currentUser.id}/collab_requests`,{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                requester_id:requesterId,
                reciever_id:recieverId})
            })
            .then(res => res.json())
            .then(collab_req => {
                alert(`collab request sent to ${collab_req.reciever.name}`)});
    }

    return(
        <div>
        <h1>Community Board</h1>
        <div className="community-cards">
        {allUsers.map(user => {
            return <SummaryCard user={user} currentUser={currentUser} createCollab={createCollab} createCollabReq={createCollabReq}/>
        })}
        </div>
        </div>
    )
}

export default CommunityBoard