import React from "react"
import {useNavigate, useParams} from "react-router-dom"

function SummaryCard({user,currentUser,createCollab}){
let navigate = useNavigate() 

function renderProfileCard(){
    console.log("rendering")
    console.log(user.id)
    navigate(`/community/${user.id}`)

}

    return(
        <div className="profile-card" >
        <div className="demo" onClick={renderProfileCard}>
        <h1>{user.name}</h1>
        <h4>{user.pronouns}</h4>
        <h3>Seeking:</h3>
        <p>{user.collab_type}</p>
        <h3>{`primary instrument:`}</h3>
        <p>{user.primary_instrument}</p>
        </div>
        <button onClick={() => createCollab(currentUser.id,user.id)}>Invite to Collaborate</button>
        </div>
    )
}

export default SummaryCard