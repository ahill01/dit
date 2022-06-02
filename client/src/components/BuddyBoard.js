import React, {useState, useEffect} from "react"
import RequestsBin from "./RequestsBin"
import ActiveCollabs from "./ActiveCollabs"

function BuddyBoard({currentUser}){
    const [collabs, setCollabs] = useState([])

//fetch collabs
      useEffect(()=>{
        fetch(`/users/${currentUser.id}/collabs`)
        .then(res => {
            if(!res.ok) throw new Error(res.status);
            else return res.json();
        })
        .then(collabs => {
            setCollabs(collabs)})
        .catch((error) =>{
            console.log('error: '+error)
        })
      },[currentUser])

    return(
        <div>
        <RequestsBin setCollabs={setCollabs} currentUser={currentUser}/>
        <ActiveCollabs currentUser={currentUser} collabs={collabs} setCollabs={setCollabs}/>
        </div>
    )
}

export default BuddyBoard