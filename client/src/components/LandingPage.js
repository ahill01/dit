import React from "react"
import ProfileCard from "./ProfileCard"
function LandingPage({allUsers}){

    return(
        <div>
        <h1>Landing Page</h1>
        {allUsers.map(user => {
            return <ProfileCard user={user}/>
        })}
        </div>
    )
}

export default LandingPage