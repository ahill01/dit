import React from "react"
import ProfileCard from "./ProfileCard"
import SummaryCard from "./SummaryCard"
function CommunityBoard({allUsers,currentUser,createCollab}){

    return(
        <div>
        <h1>Community Board</h1>
        <div className="community-cards">
        {allUsers.map(user => {
            return <SummaryCard user={user} currentUser={currentUser} createCollab={createCollab}/>
        })}
        </div>
        </div>
    )
}

export default CommunityBoard