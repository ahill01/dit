import React from "react"
function LandingPage({allUsers}){

    return(
        <div>
        <h1>Landing Page</h1>
        {allUsers.map(user => {
            return <h2>{user.name}</h2>
        })}
        </div>
    )
}

export default LandingPage