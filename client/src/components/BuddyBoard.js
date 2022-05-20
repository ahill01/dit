import React from "react"
import RequestsBin from "./RequestsBin"
import ActiveCollabs from "./ActiveCollabs"

function BuddyBoard({currentUser}){

    return(
        <div>
        <RequestsBin currentUser={currentUser}/>
        <ActiveCollabs currentUser={currentUser}/>
        </div>
    )
}

export default BuddyBoard