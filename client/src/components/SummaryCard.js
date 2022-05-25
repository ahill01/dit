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
        <h3>{user.pronouns}</h3>
        <h2>Seeking:</h2>
        <h3>{user.collab_type}</h3>
        <h2>{`primary instrument`}</h2>
        </div>
        <button onClick={() => createCollab(currentUser.id,user.id)}>Invite to Collaborate</button>
        </div>
    )
}

export default SummaryCard