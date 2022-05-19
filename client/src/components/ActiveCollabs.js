import React from "react"
function ActiveCollabs({currentUser}){

    return(
        <div>
        <h1>Landing Page</h1>
        {friends.map(friend => {
            return <h2>{friend.name}</h2>
        })}
        </div>
    )
}

export default ActiveCollabs