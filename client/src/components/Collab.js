import React, {useState, useEffect} from "react"

function Collab({currentUser,collab}){
    function displayName(){
        debugger;
        if(currentUser.name===collab.collaborator_a.name){
        return collab.collaborator_b.name
        }
        else return collab.collaborator_a.name
    }
    return(
        <div>
        <h2>{displayName()}</h2>
        </div>
    )
}

export default Collab