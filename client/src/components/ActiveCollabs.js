import React, {useState, useEffect} from "react"
import CollabCard from "./CollabCard"

function ActiveCollabs({currentUser,collabs,setCollabs}){

    useEffect(()=>{
        fetch(`/users/${currentUser.id}/collabs`)
        .then(res => {
            if(!res.ok) throw new Error(res.status);
            else return res.json();
        })
        .then(collaborations => setCollabs(collaborations))
        .catch((error) =>{
            console.log('error: '+error)
        })
      },[])

    return(
        <div>
        <h1>Collabs</h1>
        {collabs.map(collab=> {
            return <CollabCard collab={collab} currentUser={currentUser}/>
        })}
        </div>
    )
}

export default ActiveCollabs