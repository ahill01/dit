import React from "react"
import RequestsBin from "./RequestsBin"
function BuddyBoard({currentUser}){

    return(
        <div>
        <RequestsBin currentUser={currentUser}/>
        </div>
    )
}

export default BuddyBoard