import React, {useState, useEffect} from "react"

function CollabCard({currentUser,collab}){
    function displayName(){
        if(currentUser.name===collab.collaborator_a.name){
        return collab.collaborator_b.name
        }
        else return collab.collaborator_a.name
    }

    return(
        <div className="container-md collab">
        <h2>{displayName()}</h2>
        <p>{`You and ${displayName()} have been collaborators since ${collab.collab_since}`}</p>
        </div>
    )
}

export default CollabCard