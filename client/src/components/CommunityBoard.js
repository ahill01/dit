import React from "react"
import ProfileCard from "./ProfileCard"
import SummaryCard from "./SummaryCard"
function CommunityBoard({allUsers}){
    
    return(
        <div>
        <h1>Community Board</h1>
        <div className="community-cards">
        {allUsers.map(user => {
            return <SummaryCard user={user}/>
        })}
        </div>
        </div>
    )
}

export default CommunityBoard