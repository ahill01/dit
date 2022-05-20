import React from "react"
function ActiveCollabs({currentUser}){

    return(
        <div>
        <h1>Landing Page</h1>
        {currentUser.map(user => {
            return <h2>{user.name}</h2>
        })}
        </div>
    )
}

export default ActiveCollabs