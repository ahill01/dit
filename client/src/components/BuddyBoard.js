import React, {useState, useEffect} from "react"
import RequestsBin from "./RequestsBin"
import ActiveCollabs from "./ActiveCollabs"

function BuddyBoard({currentUser}){
    const [collabs, setCollabs] = useState([])
    return(
        <div>
        <RequestsBin currentUser={currentUser} setCollabs={setCollabs}/>
        <ActiveCollabs currentUser={currentUser} collabs={collabs} setCollabs={setCollabs}/>
        </div>
    )
}

export default BuddyBoard