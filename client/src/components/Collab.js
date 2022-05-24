import React, {useState, useEffect} from "react"

function Collab({currentUser,collab}){
    function displayName(){
        if(currentUser.name===collab.collaborator_a.name){
        return collab.collaborator_b.name
        }
        else return collab.collaborator_a.name
    }
    return(
        <div className="collab">
        <h2>{displayName()}</h2>
        <p>info about collab will go here</p>
        </div>
    )
}

export default Collab